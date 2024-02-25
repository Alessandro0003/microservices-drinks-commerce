import { Field, Float, ID, ObjectType } from '@nestjs/graphql'
import { PurchaseEnd } from './purchase-end'

@ObjectType('UserCustomer')
export class DrinkCustomer {
    @Field(() => ID)
    id: string

    @Field(() => Float)
    teor_alcoholic: number

    @Field()
    name: string

    @Field(() => [PurchaseEnd])
    purchases: PurchaseEnd[]
}