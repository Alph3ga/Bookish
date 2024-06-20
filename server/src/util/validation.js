const mongoose= require('mongoose');
const User= require('../models/User.js');
const { verifyJWT } = require('./encryption.js');

const validateUserInfo= (body)=> {
    if(!body.userName || !body.password){
        return false;
    }
    const userNameCheck= /^[0-9A-Za-z_.]{5,20}$/; // 5-20 characters, digits, letters, underscore and fullstop allowed
    const passwordCheck= /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[$_.!%&*]).{8,32}$/; // 8-32 digits, atleast 1 number, 1 capital and small letter, and one of $_.!%&*

    if(!userNameCheck.test(body.userName)){ return false; }
    if(!passwordCheck.test(body.password)){ return false; }

    return true;
}

const checkAccess= (req, res, next)=>{
    const auth= req.headers.authorization;
    if(auth== undefined){
        res.status(401).send({message: 'User not authenticated. '});
        return;
    }
    var tokens= auth.split(' ');
    if(tokens[0]!="Bearer"){
        res.status(403).send({message: 'Invalid credentials. '});
        return;
    }
    const access= verifyJWT(tokens[1]);
    if(!access){
        res.status(403).send({message: 'Invalid credentials. '});
        return;
    }
    if(access.accessLevel){
        res.status(403).send({message: 'Unauthorized access. '});
        return;
    }
    next();
}

exports.validateUserInfo= validateUserInfo;
exports.checkAccess= checkAccess;