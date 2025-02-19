import { Injectable } from '@nestjs/common';
import { Class, classes } from './data/classes';
import { Lesson, lessons } from './data/lessons';

@Injectable()
export class AppService {
  getHello() {
    return "Hello from bac api";
  }
}
