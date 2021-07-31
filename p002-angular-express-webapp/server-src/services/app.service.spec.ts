import { AppService } from "./app.service"

describe('app service', () => {
    it('service is created', () => {
        let service = new AppService();
        expect(service).toBeTruthy();
    })

    it('should return string', () => {
        let service = new AppService();
        const actual = service.test();
        expect(actual).toEqual('Tarun is writing test function');
    })
})