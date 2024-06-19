require('express');
const User= require('../models/User');
const validation = require('../util/validation');
const encryption= require('../util/encryption.js');

const login= async (req, res)=>{
    const body= req.body;
    if(!validation.validateUserInfo(body)){
        res.status(400).send({message: "Invalid username or password. "});
        return;
    }

    const user= await User.findOne({userName: body.userName});
    if(!user){
        res.status(400).send({message: "User does not exist. "});
        return;
    }

    if(!(await encryption.compare(body.password, user.password))){
        res.status(400).send({message: "Incorrect username or password. "});
        return;
    }

    const jwt= await encryption.getJWT(user._id, 1);

    res.status(200).send({
        message: "Success",
        jwt_token: jwt,
    });
}

module.exports= login;