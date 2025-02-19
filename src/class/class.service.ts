import { Injectable } from '@nestjs/common';
import { Class, classes } from 'src/data/classes';

@Injectable()
export class ClassService {

  getClassByName(className: string): Class | null {
    return classes.find((item) => item.engName === className) || null;
  }
}
