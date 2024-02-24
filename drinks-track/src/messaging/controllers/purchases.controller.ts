import { Controller } from '@nestjs/common'
import { EventPattern, Payload } from '@nestjs/microservices'
import { DrinksService } from '../../services/drinks.service'
import { CategoryService } from '../../services/category.service'
import { PurchasesEndService } from '../../services/purchases-end.service'

export interface Customer {
    authUserId: string
}
  
export interface Product {
    id: string
    title: string
    description: string
    slug: string
    teor_alcoholic: number
}

export interface PurchaseCreatedPayload {
    customer: Customer
    product: Product
}
  

@Controller()
export class PurchaseController {
    constructor(private drinksService: DrinksService, private categoryService: CategoryService, private purchasesEndService: PurchasesEndService) {}

    @EventPattern('purchases.new-purchase')
    async purchaseCreated(@Payload('value') payload: PurchaseCreatedPayload) { 
        let drink = await this.drinksService.getDrinksByAuthUserId(
            payload.customer.authUserId
        )

        if (!drink) {
            drink = await this.drinksService.createDrinks({
                authUserId: payload.customer.authUserId,
                name: payload.product.title,
                teor_alcoholic: payload.product.teor_alcoholic,
            })
        }

        let category = await this.categoryService.getCategoryBySlug(
            payload.product.slug
        )

        if (!category) {
            category = await this.categoryService.createCategory({
                title: payload.product.title,
                description: payload.product.description
            })
        }

        await this.purchasesEndService.createPurchaseEnd({
            categoryId: category.id,
            drinksId: drink.id
        })
    }
}