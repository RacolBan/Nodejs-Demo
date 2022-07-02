const express = require("express");
const router = express.Router();
const { userAndEmailNotExist, userExist, correctPass } = require("../middlewares/auth.js");
const { signUP, signIN, getUsers } = require('../controllers/auth.js')


// create user
router.post('/auth/signup', userAndEmailNotExist, signUP);
router.post('/auth/signin', userExist, correctPass, signIN);
router.get('/users', getUsers);
module.exports = router;