import { Module } from '@nestjs/common';
import { ClassesController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [ClassesController],
  providers: [AppService],
})
export class AppModule {}
