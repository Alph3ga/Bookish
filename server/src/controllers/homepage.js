const path= require('path')
require('express')

const homePage= (req,res)=>{
    res.json({name: "connected to server"});
};

module.exports= homePage;