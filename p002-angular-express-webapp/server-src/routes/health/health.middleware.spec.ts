import { Request, Response } from "express"
import { getHealthMiddleware } from "./health.middleware"

const mockRequest : Request = ({
    headers: {}
} as unknown) as Request;

const mockResponse : Response = ({
    send: jest.fn(),
    status: jest.fn().mockReturnValue(200),
    json: jest.fn().mockReturnValue({})
} as unknown) as Response;

describe('when health middleware is called', () => {
    beforeAll(() => {
        console.info = jest.fn().mockImplementation(() => {})
    })
    
    it('getHealthMiddleware is retrieved', async () => {
        const middleware = getHealthMiddleware()
        middleware(mockRequest, mockResponse);
        expect(mockResponse.send).toBeDefined()
    })
})