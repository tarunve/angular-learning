import { Request, Response } from "express"

export const getHealthMiddleware = () => {

    return async (req : Request, res: Response) => {
        console.info('print request headers' , JSON.stringify(req.headers));
        res.status(200).send("Server is up and running");
    }
}