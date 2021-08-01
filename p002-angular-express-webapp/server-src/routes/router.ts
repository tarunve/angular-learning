
import { Router } from 'express';
import { getHealthMiddleware } from './health/health.middleware';
import { getSaveDataMiddleware } from './save-data/save-data.middleware';

const router = Router();

export default function getRouter() {
    const healthMiddleware = getHealthMiddleware();
    const saveMiddleware = getSaveDataMiddleware();
    
    router.get('/health', (req, res) => healthMiddleware(req, res));
    router.post('/save', (req, res, next) => saveMiddleware(req, res, next));

    return router;
}