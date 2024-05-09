import { Controller, Get } from '@nestjs/common';
//import { AppService } from './app.service';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}
  constructor() {}

  @Get()
  getHello(): string {
    //return this.appService.getHello();
    return String(process.env.NODE_ENV)
  }
}
