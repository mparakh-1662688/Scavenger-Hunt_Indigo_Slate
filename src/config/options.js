'use strict'
const params = require('./params')
const uriBase = 'https://westus2.api.cognitive.microsoft.com/vision/v2.0/analyze';
const config = require('./index');

const options = {
    uri: uriBase,
    qs: params,
    body: '',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key' : config.SUBSCRIPTION_KEY
    }
};

module.exports = {
    options: options,
    subscriptionKey: config.SUBSCRIPTION_KEY,
    url: uriBase
};
