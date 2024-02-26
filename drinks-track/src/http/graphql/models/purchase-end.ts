import { Field, ID, ObjectType } from '@nestjs/graphql'
import { DrinksCustomer } from './drink-customer'
import { Category } from './category'

@ObjectType()
export class PurchaseEnd {
    @Field(() => ID)
    id: string

    @Field(() => DrinksCustomer)
    drinksCustomer: DrinksCustomer
    drinksCustomerId: string

    @Field(() => Category)
    category: Category
    categoryId: string

    @Field(() => Date, { nullable: true })
    canceledAt: Date

    @Field(() => Date)
    createdAt: Date
}