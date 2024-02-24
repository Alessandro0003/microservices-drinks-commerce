import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'

interface CreateDrinksParams {
    authUserId: string
    name: string
    teor_alcoholic?: GLfloat
}


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

    createDrinks({ authUserId, name, teor_alcoholic}: CreateDrinksParams) {
        return this.prisma.drinks.create({
            data: {
                authUserId,
                name,
                teor_alcoholic
            }
        })
    }
}
