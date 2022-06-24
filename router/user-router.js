const express = require('express');
const router= express.Router();
const {
    signup,
    userHasNotExisted,
    truePWD,
    userExisted,
    signin
} = require('../controller/homeController');

router.post ("/v1/signup", userHasNotExisted, signup);


router.post ("/v1/signin", userExisted, truePWD, signin);
module.exports = router;