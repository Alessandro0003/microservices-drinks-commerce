import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Category } from '../models/category'
import { CategoryService } from '../../../services/category.service'
import { UnauthorizedException, UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from '../../auth/authorization.guard'
import { CreateCategoryInput } from '../inputs/create-category-input'
import { AuthUser, CurrentUser } from '../../auth/current-user'
import { DrinksService } from '../../../services/drinks.service'
import { PurchasesEndService } from '../../../services/purchases-end.service'

@Resolver(() => Category)
export class CategoryResolver {
    constructor(
        private categoryService: CategoryService,
        private drinksService: DrinksService,
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
        const drink = await this.drinksService.getDrinksByAuthUserId(user.sub)

        if (!drink) {
            throw new Error('drinks not found')
        }

        const purchaseEnd = await this.purchasesEndService.getByCategoryAndDrinksId({
            categoryId: id,
            drinksId: drink.id
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