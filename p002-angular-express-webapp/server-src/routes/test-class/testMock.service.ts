export class MockService{
    async method1() : Promise<any>{
        try{
            return Promise.resolve(this.calculatePoints())
        } catch(ex){
            throw new Error('ERROR')
        }
    }

    calculatePoints() : number{
        return 100;
    }
}