import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Driver } from './modules/delivery/domain/entities/driver.entity';
import { Route } from './modules/delivery/domain/entities/route.entity';
import { Stop } from './modules/delivery/domain/entities/stop';

describe('AppController', () => {
  // let appController: AppController;

  // beforeEach(async () => {
  //   const app: TestingModule = await Test.createTestingModule({
  //     controllers: [AppController],
  //     providers: [AppService],
  //   }).compile();

  //   appController = app.get<AppController>(AppController);
  // });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect("Hello World!").toBe('Hello World!');
    });
  });

});
