import { All, Controller, Get, Header, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @All()
  @Header('Content-Type', 'text/html')
  root(@Req() request: Request, @Res() response: Response): void {
    response.send(readFileSync(join(__dirname, 'production'), { encoding : 'utf8'}));
  }
}
