import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'
import slugify from 'slugify'

interface CreateCategoryParams {
    title: string
    slug?: string
    description: string
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

    getCategoryBySlug(slug: string) {
        return this.prisma.category.findUnique({
            where: {
                slug
            }
        })
    }

    async createCategory({ title, slug = slugify(title, { lower: true }), description }: CreateCategoryParams) {
        
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
