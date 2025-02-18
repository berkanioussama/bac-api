import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonsModule } from './lessons/lessons.module';
import { LessonsService } from './lessons/lessons.service';
import { LessonsController } from './lessons/lessons.controller';
import { ClassesService } from './classes/classes.service';
import { ClassesController } from './classes/classes.controller';
import { ClassesModule } from './classes/classes.module';
import { ClassService } from './class/class.service';
import { ClassController } from './class/class.controller';

@Module({
  imports: [LessonsModule, ClassesModule],
  controllers: [AppController, LessonsController, ClassesController, ClassController],
  providers: [AppService, LessonsService, ClassesService, ClassService],
})
export class AppModule {}
