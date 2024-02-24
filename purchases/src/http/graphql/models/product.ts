import { Field, Float, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Product {
    @Field(() => ID)
    id: string

    @Field()
    title: string

    @Field()
    slug: string

    @Field()
    description: string

    @Field(() => Float)
    teor_alcoholic: number
}