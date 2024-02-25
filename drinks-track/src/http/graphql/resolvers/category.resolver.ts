import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Category } from '../models/category'
import { CategoryService } from '../../../services/category.service'
import { UnauthorizedException, UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from '../../auth/authorization.guard'
import { CreateCategoryInput } from '../inputs/create-category-input'
import { AuthUser, CurrentUser } from '../../auth/current-user'
import { DrinksCustomerService } from '../../../services/drinks-customer.service'
import { PurchasesEndService } from '../../../services/purchases-end.service'

@Resolver(() => Category)
export class CategoryResolver {
    constructor(
        private categoryService: CategoryService,
        private drinksCustomerService:  DrinksCustomerService,
        private purchasesEndService: PurchasesEndService
    ) {}

    @Query(() => [Category])
    @UseGuards(AuthorizationGuard)
    category() {
        return this.categoryService.listAllCategory()
    }

    @Query(() => Category)
    @UseGuards(AuthorizationGuard)
    async oneCategory(@Args('id') id: string, @CurrentUser() user: AuthUser) {
        const drinkCustomer = await this.drinksCustomerService.getDrinksCustomerByAuthUserId(user.sub)

        if (!drinkCustomer) {
            throw new Error('drinks not found')
        }

        const purchaseEnd = await this.purchasesEndService.getByCategoryAndDrinksCustomerId({
            categoryId: id,
            drinksCustomerId: drinkCustomer.id
        })

        if(!purchaseEnd) {
            throw new UnauthorizedException()
        }

        return this.categoryService.getCategoryById(id)
    }

    @Mutation(() => Category)
    @UseGuards(AuthorizationGuard)
    createCategory(@Args('data') data: CreateCategoryInput) {
        return this.categoryService.createCategory(data)
    }
}