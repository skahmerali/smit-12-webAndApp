let express = require('express');
let Router = express.Router();
let md= require('../middleware/md');
let cont = require('../controllers/cont')
let cont2 = require('../controllers/login')

Router.post('/signup',md.checker,cont.signUp);
Router.post('/login',cont2.login);

module.exports = Router
