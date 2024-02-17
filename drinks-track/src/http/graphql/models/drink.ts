import { Field, Float, ID, ObjectType } from '@nestjs/graphql'
import { PurchaseEnd } from './purchase-end'

@ObjectType()
export class Drink {
    @Field(() => ID)
    id: string

    @Field(() => Float)
    teor_alcoholic: number

    @Field()
    name: string

    @Field(() => [PurchaseEnd])
    purchases: PurchaseEnd[]
}