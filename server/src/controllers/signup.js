require('express')

const User = require('../models/User.js');
const validation= require('../util/validation.js');
const encryption= require('../util/encryption.js');

const signup= async (req, res)=> {
    const body= req.body;
    if(!validation.validateUserInfo(body)){
        res.status(400).send({message: "Invalid username or password."});
        return;
    }

    if(await User.findOne({ userName: body.userName })){
        res.status(400).send({message: "Username already exists."});
        return;
    }

    const hashed= await encryption.encrypt(body.password);

    const newUser= new User({
        name: body.name? body.name: "Unknown",
        userName: body.userName,
        password: hashed,
        email: body.email? body.email: "Unknown",
        books: [],
    });

    if(!(newUser=== await newUser.save())){
        res.status(502).send({message: "Could not save to database. "});
        return;
    }

    res.status(201).send({ message: "Success"});
}

module.exports= signup;