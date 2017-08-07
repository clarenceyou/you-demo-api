import { Request, Response, NextFunction } from 'express';
import * as _ from 'lodash';
import * as contactModel from '../models/contact';

export let all = (req: Request, res: Response, next: NextFunction) => {

  contactModel.all().subscribe(
    contacts => {
      res.json(contacts);
    },
    err => {
      next(err);
    }
  )

};