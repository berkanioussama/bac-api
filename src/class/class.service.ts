import { Injectable } from '@nestjs/common';
import { Class, classes } from 'src/data/classes';

@Injectable()
export class ClassService {

  getClassByName(className: string): Class[] {
    return classes.filter((item) => item.engName === className);
  }
}
