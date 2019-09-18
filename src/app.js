'use strict'
const app = require('express')();
const express = require('express'); 
const routes = require('./routes'); 
const bodyParser = require('body-parser'); 
const cors = require('cors');
const path = require( 'path' );
const publicPath = path.resolve(__dirname, '../public');


app.use(bodyParser.json({limit: '50mb'}));

app.use( cors() );

app.all('/api/*', routes);

app.all('*', express.static( publicPath ) );

app.use( (req, res) => res.sendStatus(404) );


const listen = ( log ) => {
    return app.listen( process.env.PORT, () => {
        console.log( log );
    });
  };
  
  
  // use multiple workers
  module.exports.cluster = () => {
    if( cluster.isMaster && numCPUs > 1 ) {
      for( let i = 0; i < numCPUs; i++ ) {
          cluster.fork();
      }
      console.log( `Master thread PID:${ process.pid }, starting clusters...` );
    } else {
      listen( `Worker thread PID:${ process.pid } started, port ${ process.env.PORT }`);
    }
  };
  
  
  // singleton for tests
  module.exports.singleton = () => {
    return listen( `Server listening on port ${ process.env.PORT }.` );
  };