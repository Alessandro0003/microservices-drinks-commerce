import { Field, Float, InputType } from '@nestjs/graphql'

@InputType()
export class CreateProductInput {
    @Field()
    title: string

    @Field(() => Float)
    teor_alcoholic?: number

    @Field()
    description: string
}