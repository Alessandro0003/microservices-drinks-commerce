import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { DrinksCustomer } from '../models/drink-customer'
import { UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from '../../auth/authorization.guard'
import { DrinksCustomerService } from '../../../services/drinks-customer.service'
import { PurchasesEndService } from '../../../services/purchases-end.service'
import { AuthUser, CurrentUser } from '../../auth/current-user'

@Resolver(() => DrinksCustomer)
export class DrinksCostumerResolver {
    constructor(
        private drinksCustomerService: DrinksCustomerService,
        private purchasesEndService: PurchasesEndService
    ) {}

    // @Query(() => DrinksCustomer)
    // @UseGuards(AuthorizationGuard)
    // me(@CurrentUser() user: AuthUser) {
    //     return this.drinksCustomerService.getDrinksCustomerByAuthUserId(user.sub) 
    // }

    @Query(() => [DrinksCustomer])
    @UseGuards(AuthorizationGuard)
    drinksCostumer() {
        return this.drinksCustomerService.listAllDrinksCustomer() 
    }

    @ResolveField()
    purchaseEnd(@Parent() drinksCustomer: DrinksCustomer) {
        return this.purchasesEndService.listPurchasesEndByDrinks(drinksCustomer.id)
    }
}
