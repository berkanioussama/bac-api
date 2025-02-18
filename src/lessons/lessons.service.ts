import { Injectable } from '@nestjs/common';
import { Class, classes } from 'src/data/classes';

@Injectable()
  
export class LessonsService {
  getClasses(): Class[] {
      return classes;
    }
}
