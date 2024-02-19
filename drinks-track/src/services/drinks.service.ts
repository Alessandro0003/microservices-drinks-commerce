import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'


@Injectable()
export class DrinksService {
    constructor(private prisma: PrismaService) {}

    listAllDrinks() {
        return this.prisma.drinks.findMany()
    }

    getDrinksByAuthUserId(authUserId: string) {
        return this.prisma.drinks.findUnique({
            where: {
                authUserId
            }
        })
    }

    getDrinksById(id: string) {
        return this.prisma.drinks.findUnique({
            where: {
                id
            }
        })
    }
}
