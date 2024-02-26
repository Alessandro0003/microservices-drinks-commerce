import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Category {
    @Field(() => ID)
    id: string

    @Field()
    title: string

    @Field()
    slug: string

    @Field()
    description: string
}