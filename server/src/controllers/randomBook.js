require('express')

const randomBook= (req, res)=>{
    var response={
        name: "Connected and Running"
    }
    res.json(response);
};