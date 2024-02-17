import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Drink } from './drink'
import { Category } from './category'

@ObjectType()
export class PurchaseEnd {
    @Field(() => ID)
    id: string

    @Field(() => Drink)
    drink: Drink
    drinksId: string

    @Field(() => Category)
    category: Category
    categoryId: string

    @Field(() => Date, { nullable: true })
    canceledAt: Date

    @Field(() => Date)
    createdAt: Date
}