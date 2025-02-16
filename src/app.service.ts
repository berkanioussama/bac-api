import { Injectable } from '@nestjs/common';
import { Class, classes } from './data/classes';
import { Lesson, lessons } from './data/lessons';

@Injectable()
export class AppService {
  getClasses(): Class[] {
    return classes;
  }

  getLessensIslamicScince(): Lesson[] {
    return lessons.filter((lesson) => lesson.classId === '1');
  }

  getLessensIslamicScinceByTrimestre(trimestreNumber: number): Lesson[] {
    return lessons.filter((lesson) => lesson.classId === '1').filter((lesson) => lesson.trimestre === trimestreNumber);
  }

  getLessensIslamicScinceByLessonId(lessonId: string): Lesson | undefined {
    return lessons.filter((lesson) => lesson.classId === '1').find((lesson) => lesson.id === lessonId);
  }
}
