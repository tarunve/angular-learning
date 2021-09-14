import { Test, TestingModule } from '@nestjs/testing';
import { ServerController } from './server.controller';
import { ServerModule } from './server.module';

describe('AppController', () => {
  let appController: ServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ServerModule]
    }).compile();

    appController = module.get<ServerController>(ServerController);
  });

  it('controller should be loaded', () => {
      expect(appController).toBeDefined();
  })
})