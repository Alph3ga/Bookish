const express = require('express');
const router = express.Router();

const homePage= require('./controllers/homepage');
const search= require('./controllers/search');
const signup = require('./controllers/signup');
const login = require('./controllers/login');
const { checkAccess } = require('./util/validation');

router.get('/', homePage);
router.get('/search', search);

router.post('/signup', signup);
router.post('/login', login);

router.use(checkAccess);
router.get('/profile', (req, res)=>{ res.status(400).send({message:'Success'})});

module.exports= router;