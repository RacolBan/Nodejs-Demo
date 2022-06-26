const express = require('express');
const router= express.Router();
const {signup, signin} = require('../controller/auth-controller');



   

const {
    userHasNotExisted,
    truePWD,
    userExisted,
} = require ('../middleware/auth');

router.post ("/v1/signup", userHasNotExisted, signup);

router.post ("/v1/signin", userExisted, truePWD, signin);



module.exports = router;