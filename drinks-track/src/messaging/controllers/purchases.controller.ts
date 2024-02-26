import { Controller } from '@nestjs/common'
import { EventPattern, Payload } from '@nestjs/microservices'
import { DrinksCustomerService } from '../../services/drinks-customer.service'
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
    teor_alcoholic?: number
}

export interface PurchaseCreatedPayload {
    customer: Customer
    product: Product
}
  

@Controller()
export class PurchaseController {
    constructor(private drinksCustomerService: DrinksCustomerService, private categoryService: CategoryService, private purchasesEndService: PurchasesEndService) {}

    @EventPattern('purchases.new-purchase')
    async purchaseCreated(@Payload('value') payload: PurchaseCreatedPayload) { 
        let drinksCustomer = await this.drinksCustomerService.getDrinksCustomerByAuthUserId(
            payload.customer.authUserId
        )

        if (!drinksCustomer) {
            drinksCustomer = await this.drinksCustomerService.createDrinksCustomer({
                authUserId: payload.customer.authUserId,
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
            drinksCustomerId: drinksCustomer.id
        })
    }
}