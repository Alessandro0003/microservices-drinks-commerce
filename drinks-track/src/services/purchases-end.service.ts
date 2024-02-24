import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'

interface CreatePurchaseEndParams {
    categoryId: string
    drinksId: string
}

interface GetByCategoryAndDrinksIdParams {
    categoryId: string
    drinksId: string
}

@Injectable()
export class PurchasesEndService {
    constructor(private prisma: PrismaService) {}

    getByCategoryAndDrinksId({ categoryId, drinksId }: GetByCategoryAndDrinksIdParams) {
        return this.prisma.purchaseEnd.findFirst({
            where: {
                categoryId,
                drinksId,
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

    listPurchasesEndByDrinks(drinksId: string) {
        return this.prisma.purchaseEnd.findMany({
            where: {
                drinksId,
                canceledAt: null,
            },

            orderBy: {
                createdAt: 'desc'
            }
        })
    }

    createPurchaseEnd({ categoryId, drinksId }: CreatePurchaseEndParams) {
        return this.prisma.purchaseEnd.create({
            data: {
                categoryId,
                drinksId,
                canceledAt: null
            }
        })
    }
}
