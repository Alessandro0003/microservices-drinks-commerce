import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'

interface CreateDrinksCustomerParams {
    authUserId: string
}


@Injectable()
export class DrinksCustomerService {
    constructor(private prisma: PrismaService) {}

    listAllDrinksCustomer() {
        return this.prisma.drinksCustomer.findMany()
    }

    getDrinksCustomerByAuthUserId(authUserId: string) {
        return this.prisma.drinksCustomer.findUnique({
            where: {
                authUserId
            }
        })
    }

    getDrinksCustomerById(id: string) {
        return this.prisma.drinksCustomer.findUnique({
            where: {
                id
            }
        })
    }

    createDrinksCustomer({ authUserId }: CreateDrinksCustomerParams) {
        return this.prisma.drinksCustomer.create({
            data: {
                authUserId
            }
        })
    }
}
