require('express')
const axios= require('axios');
const bookAPI= require('./bookApi');

const search= (req, res)=>{
    console.log("request recieved: ")
    const query= req.query.query;
    console.log(query)
    info= bookAPI.getVolumesInfo(query);
    info.then((json)=>{res.json(json)});
}

module.exports= search;
