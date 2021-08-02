import { MockService } from "./testMock.service"

describe('test mock service', () => {
    it('test actual', async () => {
        let service = new MockService()
        let result: any = await service.method1()
        expect(result).toEqual(100)
    })

    it('calculatePoints throw error', async () => {
        let service = new MockService()
        service.calculatePoints = () => {
            throw new Error()
        }
        try{
            await service.method1()
        } catch(e){
            expect(e.message).toEqual('ERROR')
        }
    })
})