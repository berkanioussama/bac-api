import { Controller, Get, Param } from '@nestjs/common';
import { ClassService } from './class.service';
import { Class } from 'src/data/classes';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) { }
  
  @Get(':className')
  getClassByName(@Param('className') className: string): Class | null {
    
    return this.classService.getClassByName(className);
  }
}
