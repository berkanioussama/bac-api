import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Class } from './data/classes';
import { Lesson } from './data/lessons';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getClasses(): Class[] {
    return this.appService.getClasses();
  }

  @Get('islamic-science')
  getLessensIslamicScince(): Lesson[] {
    return this.appService.getLessensIslamicScince();
  }

  @Get('islamic-science/trimestre/:trimestre')
  getLessensIslamicScinceByTrimestre(@Param('trimestre') trimestre: number): Lesson[] {
    const trimestreNumber = +trimestre;
    return this.appService.getLessensIslamicScinceByTrimestre(trimestreNumber);
  }

  @Get('islamic-science/lesson/:lesson')
  getLessensIslamicScinceByLessonId(@Param('lesson') lesson: string): Lesson | undefined {
    const lessonId = String(+lesson) ;
    return this.appService.getLessensIslamicScinceByLessonId(lessonId);
  }
}
