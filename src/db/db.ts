import Aerospike = require('aerospike');
import logger = require('../util/log');

export let conn: any;

export let connect = (config: object) => {
    Aerospike.connect(config, (error, client) => {
        if (error) throw error;

        logger.info('Connected to Aerospike DB successfully');
        conn = client;
    })
};

