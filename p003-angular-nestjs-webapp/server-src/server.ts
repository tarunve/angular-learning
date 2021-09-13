import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
  const httpServer = await app.getHttpServer();
  return httpServer;
}
export const server = bootstrap();
