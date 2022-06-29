const express = require("express");
const router = express.Router();
const { userNotExist, userExist, correctPass } = require("../middlewares/auth.js");
const { signUP, signIN, getUsers } = require('../controllers/auth.js')


// create user
router.post('/auth/signup', userNotExist, signUP)
router.post('/auth/signin', userExist, correctPass, signIN)
router.get('/users', getUsers)
router.get("/users")
module.exports = router;