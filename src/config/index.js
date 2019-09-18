'use strict'

const items = require('../helpers/items');

module.exports = {

    // APP ENV
    "NODE_ENV": process.env.NODE_ENV || 'production',
    "NODE_CLUSTER": process.env.NODE_CLUSTER || 'false',
    
    "SERVER_URL" : process.env.SERVER_URL,
    "SUBSCRIPTION_KEY" : process.env.SUBSCRIPTION_KEY,
    "VISUAL_FEATURES" : process.env.VISUAL_FEATURES,
    "LANGUAGE" : process.env.LANGUAGE,
    "DETAILS" : process.env.DETAILS,
    "ITEMS": process.env.ITEMS || items
};
