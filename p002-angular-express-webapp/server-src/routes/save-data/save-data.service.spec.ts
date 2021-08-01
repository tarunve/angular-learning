import { SaveDataService } from "./save-data.service";

describe('Testing SaveDataService', () => {

    it('when save method is called and success result is returned', async () => {
        const service = new SaveDataService();
        const data = await service.save();
        expect(data['file']).toContain('html')
    })

    it('when save method is called and success mocked result is returned', async () => {
        const service = new SaveDataService();
        service.someFunction = () => {
            return Promise.resolve('Success Result from someFunction')
        }
        const data = await service.save();
        expect(data).toEqual('Success Result from someFunction')
    })

    it('when save method is called and error is returned', async () => {
        const service = new SaveDataService();
        service.someFunction = () => {
            throw new Error('ERROR')
        }
        try {
            await service.save();
        } catch (error) {
            expect(error.message).toEqual('some error occured')
        }
    })
});