import { Module } from '@nestjs/common';
import { ServerController } from './server.controller';

@Module({
  imports: [],
  controllers: [ServerController]
})
export class ServerModule {}
