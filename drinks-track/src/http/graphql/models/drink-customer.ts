import { Directive, Field, Float, ID, ObjectType } from '@nestjs/graphql'
import { PurchaseEnd } from './purchase-end'

@ObjectType('User')
@Directive('@extends')
@Directive('@key(fields: "authUserId")')
export class DrinksCustomer {
    id: string

    @Field(() => ID)
    @Directive('@external')
    authUserId: string

    @Field(() => [PurchaseEnd])
    purchaseEnd: PurchaseEnd[]
}