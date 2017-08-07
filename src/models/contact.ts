import { Observable } from '@reactivex/rxjs';
import * as db from '../db/db';
import logger = require('../util/log');
import { Contact } from '../types/contact';

export let all = (): Observable<Contact[]> => {

    const obs = Observable.create((observer) => {

        let contacts: object[] = [];

        const query = db.conn.query('test', 'contact');
        const stream = query.foreach();
        stream.on('data', function (record) {
            logger.info("Record: ", JSON.stringify(record));
            contacts.push(record);
        });
        stream.on('end', function() {
            observer.next(contacts);
            observer.complete();
        });

    });

    return obs;

}