import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PurchaseEnd } from '../models/purchase-end'
import { PurchasesEndService } from '../../../services/purchases-end.service'
import { UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from '../../auth/authorization.guard'
import { DrinksService } from '../../../services/drinks.service'
import { CategoryService } from '../../../services/category.service'

@Resolver(() => PurchaseEnd)
export class PurchasesEndResolver {
    constructor(
        private purchasesEndService: PurchasesEndService,
        private drinksService: DrinksService,
        private categoryService: CategoryService
    ){}

    @Query(() => [PurchaseEnd])
    @UseGuards(AuthorizationGuard)
    purchaseEnd() {
        return this.purchasesEndService.listAllPurchasesEnd()
    } 

    @ResolveField()
    drink(@Parent() purchaseEnd: PurchaseEnd) {
        return this.drinksService.getDrinksById(purchaseEnd.drinksId)
    }

    @ResolveField()
    category(@Parent() purchaseEnd: PurchaseEnd) {
        return this.categoryService.getCategoryById(purchaseEnd.categoryId)
    }
}
