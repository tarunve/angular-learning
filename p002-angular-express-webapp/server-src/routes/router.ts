import express from 'express';

const router = express.Router();

export default function getRouter() {
    router.get('/health', function(req, res){
        console.info(req);
        res.status(200).send("Server is up and running");
    })

    return router;
}