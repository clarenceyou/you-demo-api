import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as _ from 'lodash';

import logger = require('../util/log');
import * as contactController from '../controllers/contact';

const router = express.Router();

router.get('/', contactController.all);

export = router;