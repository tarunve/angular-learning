import { All, Controller, Get, Header, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller()
export class ServerController {

  @Get('hello')
  getHello(): string {
    return 'Hello World!';
  }

  @All()
  @Header('Content-Type', 'text/html')
  root(@Req() request: Request, @Res() response: Response): void {
    response.send(readFileSync(join(__dirname, 'production'), { encoding : 'utf8'}));
  }
}
