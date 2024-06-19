const bcrypt= require('bcrypt');
const jose= require('jose');

const SALT_ROUNDS= 6;

const RSA_KEY= process.env.RSA_PRIVATE_KEY;
const ISSUER= process.env.SYSTEM_NAME;
const SIGN_ALG = 'RS512';
const TIMEOUT= '24h';

const encrypt= async (plaintext)=> {
    return await bcrypt.hash(plaintext, SALT_ROUNDS);
}

const compare= async (plaintext, hashed)=> {
    return await bcrypt.compare(plaintext, hashed);
}

exports.encrypt= encrypt;
exports.compare= compare;

const getJWT= async (userID, accessLevel)=> {
    const payload= {'accessLevel':accessLevel, "userID": userID};
    
    const key= await jose.importPKCS8(RSA_KEY);

    return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: SIGN_ALG })
    .setIssuedAt()
    .setIssuer(ISSUER)
    .setAudience('user')
    .setExpirationTime(TIMEOUT)
    .sign(key);
}

const verifyJWT= async (token)=>{
    const key= await jose.importPKCS8(RSA_KEY, SIGN_ALG);

    try{
        const {payload, protectedHeader} = await jose.jwtVerify(token, key, {
            issuer: ISSUER,
            audience: user,
        })

        if(payload.accessLevel==undefined || payload.userID==undefined){ return false; }
        return {'accessLevel':accessLevel, "userID": userID};
    }
    catch(err){
        return false;
    }
}

exports.getJWT= getJWT;
exports.verifyJWT= verifyJWT;