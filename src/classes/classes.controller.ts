import { Controller } from '@nestjs/common';
import { Class } from 'src/data/classes';
import { ClassesService } from './classes.service';
import { Get } from '@nestjs/common';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}
  @Get()
  getClasses(): Class[] {
    return this.classesService.getClasses();
  }
}
