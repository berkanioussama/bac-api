import { Controller, Get, Param } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { Lesson } from '../data/lessons';

@Controller('lessons')
export class LessonsController {
  
  constructor(private readonly lessonsService: LessonsService) {}
  
  @Get()
  getLessons(): Lesson[] {
    return this.lessonsService.getLessons();
  }

  @Get('trimestre/:trimestre')
  getLessonsByTrimestre(@Param('trimestre') trimestre: string): Lesson[] {
    const trimestreNumber = parseInt(trimestre, 10);
    return this.lessonsService.getLessonsByTrimestre(trimestreNumber);
  }
  
}
