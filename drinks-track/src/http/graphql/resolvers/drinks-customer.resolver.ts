import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { DrinkCustomer } from '../models/drink-customer'
import { UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from '../../auth/authorization.guard'
import { DrinksCustomerService } from '../../../services/drinks-customer.service'
import { PurchasesEndService } from '../../../services/purchases-end.service'
import { AuthUser, CurrentUser } from '../../auth/current-user'

@Resolver(() => DrinkCustomer)
export class DrinksCostumerResolver {
    constructor(
        private drinksCustomerService: DrinksCustomerService,
        private purchasesEndService: PurchasesEndService
    ) {}

    @Query(() => DrinkCustomer)
    @UseGuards(AuthorizationGuard)
    me(@CurrentUser() user: AuthUser) {
        return this.drinksCustomerService.getDrinksCustomerByAuthUserId(user.sub) 
    }

    @Query(() => [DrinkCustomer])
    @UseGuards(AuthorizationGuard)
    drinksCostumer() {
        return this.drinksCustomerService.listAllDrinksCustomer() 
    }

    @ResolveField()
    purchases(@Parent() drinkCustomer: DrinkCustomer) {
        return this.purchasesEndService.listPurchasesEndByDrinks(drinkCustomer.id)
    }
}
