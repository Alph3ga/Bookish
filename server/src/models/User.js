const mongoose= require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    userName: String,
    name: String,
    email: String,
    password: String,
    books: [
        {id: String}
    ],
},{
    timestamps: true,
});

const User= model('User', userSchema);
module.exports= User;