import express from 'express';
import * as PKG from './package.json';
import { join } from 'path';
import helmet from 'helmet';
import { json , urlencoded } from 'body-parser';
import compression from 'compression';
import { readFileSync } from 'fs';
import * as environment from './src/environments/environment';
import getRouter from './server-src/routes/router'
import { getConfig } from './server-src/config/config';

const APP = express();
const LOCAL_PORT = 8080;
const PORT = process.env.PORT || LOCAL_PORT;
const PATH_STATIC_PKG_ROUTE = `/pkg/${PKG.version}/web`;
const DOCUMENT_ROOT = join(__dirname, 'production');
const expressHandlebars = require('express-handlebars');

console.info("Tarun is printing env vars :: " + JSON.stringify(environment));
console.info("Tarun is printing dev config :: " + JSON.stringify(getConfig('dev')));
console.info("Tarun is printing prod config :: " + JSON.stringify(getConfig('prod')));

APP.use(helmet());
APP.use(compression());
APP.use(urlencoded({ extended : false}));
APP.use(json());

APP.use(
    PATH_STATIC_PKG_ROUTE,
    express.static(DOCUMENT_ROOT, {
        maxAge: '1y',
        fallthrough: false
    })
);

APP.engine(
    'html',
    expressHandlebars({
        layoutsDir: DOCUMENT_ROOT,
        helpers: {
            toJson: JSON.stringify
        }
    })
);
APP.set('view engine', 'html');
APP.set('views', DOCUMENT_ROOT);
APP.use('/', getRouter());

APP.get('/', function(req, res){
        res.send(readFileSync(join(
            DOCUMENT_ROOT,
            'index.html'
        ),
        {
            encoding: 'utf8'
        }
    )
    .replace(/{STATIC_PATH}/, `pkg/${PKG.version}/web`)
    )
});

APP.listen(PORT, () => {
    console.info(`Node application ${PKG.name} has started their node server on port ${PORT}`);
});

process.on('SIGINT', () => process.exit(1));