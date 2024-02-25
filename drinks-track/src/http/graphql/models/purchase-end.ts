import { Field, ID, ObjectType } from '@nestjs/graphql'
import { DrinkCustomer } from './drink-customer'
import { Category } from './category'

@ObjectType()
export class PurchaseEnd {
    @Field(() => ID)
    id: string

    @Field(() => DrinkCustomer)
    drink: DrinkCustomer
    drinksCustomerId: string

    @Field(() => Category)
    category: Category
    categoryId: string

    @Field(() => Date, { nullable: true })
    canceledAt: Date

    @Field(() => Date)
    createdAt: Date
}