import { Test, TestingModule } from '@nestjs/testing';
import { Request, Response } from 'express';
import { ServerController } from './server.controller';
import fs from 'fs';

describe('AppController', () => {
    let serverController: ServerController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ServerController]
        }).compile();

        serverController = app.get<ServerController>(ServerController);
    });

    describe('hello endpoint', () => {
        it('should return "Hello World!"', () => {
            expect(serverController.getHello()).toBe('Hello World!');
        });
    });

    describe('root endpoint', () => {
        it('should return HTML response', () => {
            const mockRequest = {} as unknown as Request;
            const mockResponse = {
                send: jest.fn()
            } as unknown as Response;

            jest.spyOn(fs, 'readFileSync').mockReturnValue('<html></html>');
            expect(serverController.root(mockRequest, mockResponse)).toBeUndefined();
        });
    });
});
