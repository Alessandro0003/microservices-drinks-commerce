import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Category {
    @Field(() => ID)
    id: string

    @Field()
    description: string

    @Field()
    slug: string
}