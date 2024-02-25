import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'

interface CreatePurchaseEndParams {
    categoryId: string
    drinksCustomerId: string
}

interface GetByCategoryAndDrinksCustomerIdParams {
    categoryId: string
    drinksCustomerId: string
}

@Injectable()
export class PurchasesEndService {
    constructor(private prisma: PrismaService) {}

    getByCategoryAndDrinksCustomerId({ categoryId, drinksCustomerId }: GetByCategoryAndDrinksCustomerIdParams) {
        return this.prisma.purchaseEnd.findFirst({
            where: {
                categoryId,
                drinksCustomerId,
                canceledAt: null
            }
        })
    }

    listAllPurchasesEnd() {
        return this.prisma.purchaseEnd.findMany({
            where: {
                canceledAt: null
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    }

    listPurchasesEndByDrinks(drinksCustomerId: string) {
        return this.prisma.purchaseEnd.findMany({
            where: {
                drinksCustomerId,
                canceledAt: null,
            },

            orderBy: {
                createdAt: 'desc'
            }
        })
    }

    createPurchaseEnd({ categoryId, drinksCustomerId }: CreatePurchaseEndParams) {
        return this.prisma.purchaseEnd.create({
            data: {
                categoryId,
                drinksCustomerId,
                canceledAt: null
            }
        })
    }
}
