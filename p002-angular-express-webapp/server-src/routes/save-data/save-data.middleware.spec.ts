jest.mock('./save-data.service')

import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { getSaveDataMiddleware } from "./save-data.middleware";
import { SaveDataService } from "./save-data.service";

const mockRequest : Request = ({
    headers: {}
} as unknown) as Request;

const mockResponse : Response = ({
    status: jest.fn().mockReturnValue(200),
    json: jest.fn().mockReturnValue({})
} as unknown) as Response;

const mockNext : NextFunction = jest.fn();

describe('when save service is called', () => {
    beforeAll(() => {
        console.error = jest.fn().mockImplementation(() => {})
        console.info = jest.fn().mockImplementation(() => {})
        console.log = jest.fn().mockImplementation(() => {})
    })

    it('save service is called', async () => {
        const service = new SaveDataService();
        service.someFunction = () => {
            return Promise.resolve('Success Result from someFunction')
        }

        const middleware = getSaveDataMiddleware();
        middleware(mockRequest, mockResponse, mockNext)
        expect(SaveDataService).toHaveBeenCalledTimes(2);
    })

    it('save service throw error', async () => {
        const service = new SaveDataService();
        service.someFunction = () => {
            throw new Error('ERROR')
        }

        const middleware = getSaveDataMiddleware();
        try {
            middleware(mockRequest, mockResponse, mockNext)
        } catch (error) {
            expect(error.message).toEqual('some error occured');
        }
    })

})