import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateCategoryInput {
    @Field()
    description: string

    @Field()
    title: string
}