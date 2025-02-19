import { Injectable } from '@nestjs/common';
import { Lesson, lessons } from 'src/data/lessons';

@Injectable()
  
export class LessonsService {
  getLessons(): Lesson[] {
    return lessons;
  }

  getLessonsByTrimestre(trimestre: number): Lesson[] {
    return lessons.filter((lesson) => lesson.trimestre === trimestre);
  }
}
