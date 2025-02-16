import { Test, TestingModule } from '@nestjs/testing';
import { ClassesController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: ClassesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClassesController],
      providers: [AppService],
    }).compile();

    appController = app.get<ClassesController>(ClassesController);
  });

  describe('root', () => {
    it('should return classes array', () => {
      expect(appController.getClasses()).toBe('classes array');
    });
  });
});
