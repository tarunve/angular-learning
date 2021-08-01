export class SaveDataService{
    async save() : Promise<any> {
        try{
            return this.someFunction()
        } catch(ex){
            throw new Error('some error occured')
        }
    }

    async someFunction() : Promise<any>{
        const response = {
            "file" : "<htm><body>This is sample response</body></html>"
        }
        return Promise.resolve(response);
    }
}