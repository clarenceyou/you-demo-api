import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import * as db from './db/db';

/**
 * Load environment variables from .env file
 */
dotenv.config();

const env = process.env.NODE_ENV;

import logger = require('./util/log');

// Route handlers
import contactRoute = require('./routes/contact');

/**
 * Create Express server.
 */
const app = express();
app.set('env', env);

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 4001);
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

const config = {
    hosts: process.env.DB_HOST
};
db.connect(config);

/**
 * Primary app routes.
 */
app.use('/contacts', contactRoute);

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  const {address, port} = server.address();
  logger.info(`Listening on http://${address}:${port}`);
});

module.exports = app;
