import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PurchaseEnd } from '../models/purchase-end'
import { PurchasesEndService } from '../../../services/purchases-end.service'
import { UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from '../../auth/authorization.guard'
import { DrinksCustomerService } from '../../../services/drinks-customer.service'
import { CategoryService } from '../../../services/category.service'

@Resolver(() => PurchaseEnd)
export class PurchasesEndResolver {
    constructor(
        private purchasesEndService: PurchasesEndService,
        private drinksCustomerService: DrinksCustomerService,
        private categoryService: CategoryService
    ){}

    @Query(() => [PurchaseEnd])
    @UseGuards(AuthorizationGuard)
    purchaseEnd() {
        return this.purchasesEndService.listAllPurchasesEnd()
    } 

    @ResolveField()
    drinksCustomer(@Parent() purchaseEnd: PurchaseEnd) {
        return this.drinksCustomerService.getDrinksCustomerById(purchaseEnd.drinksCustomerId)
    }

    @ResolveField()
    category(@Parent() purchaseEnd: PurchaseEnd) {
        return this.categoryService.getCategoryById(purchaseEnd.categoryId)
    }
}
