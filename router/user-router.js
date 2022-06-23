const express = require('express');
const router= express.Router();
const {} = require('../controller/getController');
const UserModel = require('../models/user-model');
const md5 = require ('md5');
// const connection = require ("../models/config-model") ;


// router.get ('/', async (req, res) => {
//     await connection.authenticate();
//     console.log('connect successfully!')
// })

router.post ("/v1/signup", async (req, res) =>{
    const {username, pwd_hash:pwd} = req.body;
    console.log(pwd)
         try {
            const found = await UserModel.findOne({
                where:{
                username,
                }
            });

            if (found) {
                return res.status(409).json({message: "username has existed"});
            };
                // if !found
                const decrypted = md5(pwd);
                console.log(decrypted)
                const newUser = await UserModel.create({
                    username,
                    pwd
                })
                if (newUser) {
                    return res.status(201).json(newUser);
                } 
                    res.status(400).json({message: "create new user unsuccesfully"})
            
        } catch (error) {
            res.status(500).json({message: error.message});
            
        }
    

})
router.post ("/v1/signin", (req, res) =>{
    res.json({message: "connection sign in"})
})
module.exports = router;