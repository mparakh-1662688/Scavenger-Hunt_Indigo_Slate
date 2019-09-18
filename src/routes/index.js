const router = require('express').Router();
const send = require('./send');
const getList = require('./getList');

router.post('/api/send', send);

router.get('/api/getList', getList);


module.exports = router;

