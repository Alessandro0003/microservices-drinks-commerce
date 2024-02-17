import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Drink } from '../models/drink'
import { UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from '../../auth/authorization.guard'
import { DrinksService } from '../../../services/drinks.service'
import { PurchasesEndService } from '../../../services/purchases-end.service'

@Resolver(() => Drink)
export class DrinksResolver {
    constructor(
        private drinksService: DrinksService,
        private purchasesEndService: PurchasesEndService
    ) {}

    @Query(() => [Drink])
    @UseGuards(AuthorizationGuard)
    drinks(){
        return this.drinksService.listAllDrinks() 
    }

    @ResolveField()
    purchases(@Parent() drink: Drink) {
        return this.purchasesEndService.listPurchasesEndByDrinks(drink.id)
    }
}
