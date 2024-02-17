import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'

@Injectable()
export class PurchasesEndService {
    constructor(private prisma: PrismaService) {}

    listAllPurchasesEnd() {
        return this.prisma.purchaseEnd.findMany()
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
}
