import { NestFactory } from '@nestjs/core';
import { ServerModule } from './server.module';

async function bootstrap() {
  const app = await NestFactory.create(ServerModule);
  await app.listen(8080);
  const httpServer = await app.getHttpServer();
  return httpServer;
}
export const server = bootstrap();
