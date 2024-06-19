const express = require('express');
const router = express.Router();

const homePage= require('./controllers/homepage');
const search= require('./controllers/search');
const signup = require('./controllers/signup');

router.get('/', homePage);
router.get('/search', search);

router.post('/signup', signup);

module.exports= router;