const bcrypt= require('bcrypt');

const SALT_ROUNDS= 6;

const encrypt= async (plaintext)=> {
    return await bcrypt.hash(plaintext, SALT_ROUNDS);
}

const compare= async (plaintext, hashed)=> {
    return await bcrypt.compare(plaintext, hashed);
}

exports.encrypt= encrypt;
exports.compare= compare;