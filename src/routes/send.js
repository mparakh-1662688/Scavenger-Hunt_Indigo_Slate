const computeVision = require('../helpers/compute-vision-logic');
const fs = require('fs-extra');
const path = require('path');


const send = async (req, res) => {
    console.log(1)
    try {
        let base64 = await req.body.data[0];
        base64 = base64[base64.length - 1]; 
        let name = await  req.body.data[1];
        let buffer = Buffer.from(base64.split(",")[1], 'base64')
        let result = await computeVision( buffer, name );
        res.send(result);
    } catch ( err ) {
        console.log( err );
    }
}

module.exports = send; 