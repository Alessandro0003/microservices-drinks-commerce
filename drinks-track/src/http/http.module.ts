import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from '../database/database.module'
import { GraphQLModule } from '@nestjs/graphql'
import path from 'node:path'
import { ApolloDriver } from '@nestjs/apollo'
import { DrinksCostumerResolver } from './graphql/resolvers/drinks-customer.resolver'
import { CategoryResolver } from './graphql/resolvers/category.resolver'
import { PurchasesEndResolver } from './graphql/resolvers/purchases-end.resolver'
import { DrinksCustomerService } from '../services/drinks-customer.service'
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
        DrinksCostumerResolver,
        CategoryResolver,
        PurchasesEndResolver,

        // Services
        DrinksCustomerService,
        CategoryService,
        PurchasesEndService
    ]
})
export class HttpModule {}
