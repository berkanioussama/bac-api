import { Controller, Get } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { Class } from '../data/classes';

@Controller('lessons')
export class LessonsController {
  
  constructor(private readonly lessonsService: LessonsService) {}
  
  @Get()
  getClasses(): Class[] {
    return this.lessonsService.getClasses();
  }
  
}
