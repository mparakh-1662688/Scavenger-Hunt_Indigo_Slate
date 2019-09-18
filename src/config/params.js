'use strict'

const { VISUAL_FEATURES, LANGUAGE, DETAILS} = require('./index');

const params = {
    'visualFeatures': VISUAL_FEATURES || '',
    'details': DETAILS || '',
    'language': LANGUAGE || 'en'
};

module.exports = params;
