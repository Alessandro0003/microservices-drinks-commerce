import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'


@Injectable()
export class DrinksService {
    constructor(private prisma: PrismaService) {}

    listAllDrinks() {
        return this.prisma.drinks.findMany()
    }

    getDrinksById(id: string) {
        return this.prisma.drinks.findUnique({
            where: {
                id
            }
        })
    }
}
