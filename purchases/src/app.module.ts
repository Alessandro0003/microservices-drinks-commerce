import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { HttpModule } from './http/http.module'
import { ProductsService } from './services/products.service';
import { MessagingModule } from './messaging/messaging.module';

@Module({
  imports: [DatabaseModule, HttpModule, MessagingModule],
  controllers: [],
  providers: [ProductsService],
})
export class AppModule {}
