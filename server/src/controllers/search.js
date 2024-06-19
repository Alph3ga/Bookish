require('express')
const axios= require('axios');
const bookAPI= require('./bookApi');

const search= (req, res)=>{
    const query= req.query.query;
    info= bookAPI.getVolumesInfo(query);
    info.then((json)=>{res.json(json)});
}

module.exports= search;
