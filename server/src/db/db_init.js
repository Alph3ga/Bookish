const mongoose= require('mongoose');

function init(){
    const URL= process.env.DB_URL;
    mongoose.connect(URL).then(
        ()=> console.log("Database connected. "),
        e=> console.log("Error connecting to database: ", e));
    mongoose.connection.on('disconnected', ()=> console.log("Database disconnected. "));
    mongoose.connection.on('error', e=> console.log("Database connection error: ", e));
    mongoose.connection.on('reconnected', ()=> console.log("Database reconnected. "));
}

module.exports= init;