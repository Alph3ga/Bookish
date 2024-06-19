const mongoose= require('mongoose');
const User= require('../models/User.js');

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

exports.validateUserInfo= validateUserInfo;