'use strict'

const request = require('request-promise');
const config = require('../config/options')
const options = config.options;


module.exports = async ( byteArray, name ) => {
    options.body = byteArray;
    try {
        let answer = await request.post(options);            
        let jsonResponse = JSON.parse(answer);
        let right = name.split(" ");
        console.log(jsonResponse.description.captions);
        console.log(jsonResponse.description.tags);
        let captionCheck = jsonResponse.description.captions[0].text.split(" ");
        if (captionCheck === undefined) {
            captionCheck = '';
        }
        let tags = jsonResponse.description.tags;
        let isPhoto = false;
        for (let i = 0; i < right.length; i++) {
            if (tags.includes(right[i].toLowerCase()) || captionCheck.includes(right[i].toLowerCase())) {
                isPhoto = true;
            }
        }
        // V2 check for false images 
        // let wrong = ['cellphone', 'screen', 'laptop', 'computer', 'monitor', 'display', 'keyboard', 'remote'];
        // for (let i = 0; i < wrong.length; i++) {
        //     if (tags.includes(wrong[i])) {
        //         isPhoto = false;
        //     }
        // }
        return isPhoto;
    } catch (err) {
        console.log(err);
    }
};


