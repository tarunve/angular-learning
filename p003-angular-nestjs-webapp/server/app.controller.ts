import { Controller, Get } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import * as path from 'path'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('*')
  base(req: Request, res: Response){
    res.send(path.join(__dirname, 'client', 'index.html'));
  }
}
