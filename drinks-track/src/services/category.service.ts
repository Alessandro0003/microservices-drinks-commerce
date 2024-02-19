import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'
import slugify from 'slugify'

interface CreateCategoryParams {
    description: string
    title: string
    
}

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

    async createCategory({ description, title }: CreateCategoryParams) {
        const slug = slugify(title, { lower: true })

        const categoryAlreadyExists = await this.prisma.category.findUnique({
            where: {
                slug
            }
        })

        if (categoryAlreadyExists) {
            throw new Error('Category already exists.')
        }

        return this.prisma.category.create({
            data: {
                description,
                title,
                slug 
            }
        })
    }
}
