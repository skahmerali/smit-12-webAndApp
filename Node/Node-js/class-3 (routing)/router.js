const express = require('express');
const { default: login } = require('../Controller/login');
const app = express()
const router = express.Router();

const appRout = () => {

    router.get('/user', login)
}
export default appRout;