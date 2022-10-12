import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastucture/database/db.module';
import { DeliveryModule } from './modules/delivery/delivery.module';

@Module({
  imports: [DeliveryModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
