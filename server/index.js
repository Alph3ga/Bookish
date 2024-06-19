var express= require('express');
var cors= require('cors');
const db_init= require('./src/db/db_init.js')

const router= require('./src/router');
const mongoose = require('mongoose');

var app= express();
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/', router);
app.use(express.static('res'));

var server= app.listen(PORT, HOST, ()=>{
    console.log("Server is up and listening at Port: %d on Host: %s", PORT, HOST);
});

db_init();

function cleanup() {
    server.close(()=> {
      mongoose.connection.close();
      console.log("Server gracefully shut down. ")
      process.exit();
    });
  
    setTimeout(()=> {
     console.error("Could not close connections in time, forcing shut down. ");
     process.exit(1);
    }, 30*1000);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

