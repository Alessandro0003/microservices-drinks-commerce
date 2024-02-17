import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { HttpModule } from './http/http.module'
import { ProductsService } from './services/products.service';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [],
  providers: [ProductsService],
})
export class AppModule {}
