import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Lesson } from '../data/lessons';

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHellow(){
    return this.lessonsService.getHellow();
  }
  
}
