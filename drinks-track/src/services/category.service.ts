import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}

    listAllCategory() {
        return this.prisma.category.findMany()
    }

    getCategoryById(id: string) {
        return this.prisma.category.findUnique({
            where: {
                id
            }
        })
    }
}
