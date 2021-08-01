
import { SaveDataService } from "./save-data.service"

export const getSaveDataMiddleware = () => {
    let saveService = new SaveDataService();

    return async (req, res, next) : Promise<any>=> {
        try {
            console.info('print req - ' + req)
            const response = await saveService.save();
            console.info('response :: ' + JSON.stringify(response))
            res.send(response)
        } catch (error) {
            console.error(error.message);
            next(error);
        }
    }
}