import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from '../database/database.module'
import { GraphQLModule } from '@nestjs/graphql'
import path from 'node:path'
import { ApolloDriver } from '@nestjs/apollo'
import { DrinksResolver } from './graphql/resolvers/drinks.resolver'
import { CategoryResolver } from './graphql/resolvers/category.resolver'
import { PurchasesEndResolver } from './graphql/resolvers/purchases-end.resolver'
import { DrinksService } from '../services/drinks.service'
import { CategoryService } from '../services/category.service'
import { PurchasesEndService } from '../services/purchases-end.service'

@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
        })
    ],
    providers: [
        // Resolvers
        DrinksResolver,
        CategoryResolver,
        PurchasesEndResolver,

        // Services
        DrinksService,
        CategoryService,
        PurchasesEndService
    ]
})
export class HttpModule {}
