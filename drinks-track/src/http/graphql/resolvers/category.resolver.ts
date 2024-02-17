import { Query, Resolver } from '@nestjs/graphql'
import { Category } from '../models/category'
import { CategoryService } from '../../../services/category.service'
import { UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from '../../auth/authorization.guard'

@Resolver(() => Category)
export class CategoryResolver {
    constructor(private categoryService: CategoryService) {}

    @Query(() => [Category])
    @UseGuards(AuthorizationGuard)
    category() {
        return this.categoryService.listAllCategory()
    }
}