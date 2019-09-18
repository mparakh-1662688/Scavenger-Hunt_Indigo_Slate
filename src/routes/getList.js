const items = require('../helpers/items');

const getList = async(req, res) => {
    res.send(items);
}

module.exports = getList;