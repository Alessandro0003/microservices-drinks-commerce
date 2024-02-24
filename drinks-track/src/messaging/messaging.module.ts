import { Module } from '@nestjs/common';
import { PurchaseController } from './controllers/purchases.controller';
import { DrinksService } from '../services/drinks.service';
import { CategoryService } from '../services/category.service';
import { PurchasesEndService } from '../services/purchases-end.service';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [PurchaseController],
    providers: [
        DrinksService,
        CategoryService,
        PurchasesEndService
    ]
})
export class MessagingModule {}
