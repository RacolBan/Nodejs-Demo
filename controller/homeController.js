const {UserModel} = require('../models/focus-models');
const md5 = require ('md5');
var jwt = require('jsonwebtoken');
require("dotenv").config();
const userHasNotExisted = async (req, res, next) =>{
    const {username} = req.body;
    try {
        const found = await UserModel.findOne({
            where: {
                username,
            }
        });

        if (found) {
            return res.status(409).json({message: "username has existed"});
        };
        next();

    } catch (error) {
         res.status(500).json({message: error.message});
    }
};

const signup = async(req, res) =>{
    const {username, pwd_hash:pwd} = req.body;

    const decrypted = md5(pwd);
    try {
            const newUser = await UserModel.create({
                username,
                pwd_hash:decrypted,
            })
            if (newUser) {
                return res.status(201).json(newUser);
            } 
                res.status(400).json({message: "create new user unsuccesfully"})
            
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}

const userExisted = async (req, res, next) => {
    //get data from fe
    const {username, pwd_hash: pwd} = req.body;
    try {
        const found = await UserModel.findOne({
            where: {
                username,
            }
        });

        if (!found) {
            return res.status(404).json({message: "User no longer exist"});
        }
        next();
    } catch (error) {
        res.status(500).json({message: error.meesage});
    }
};

const truePWD = async (req, res, next) => {
    const {username, pwd_hash: pwd} = req.body;

    try {
        const found = await UserModel.findOne({
            where: {
                username,
            }
        });
        const decrypted = md5(pwd)
        if (decrypted !== found.pwd_hash) {
            return res.status(401).json({message: "login failed: invalid password"});
        }
        next();
    } catch (error) {
        res.status(500).json({message: error.meesage});
        
    }
}

const signin = async (req, res) => {
    const {username} = req.body;
    const privateKey = process.env.PRIVATEKEY;
    const HS512 = process.env.HS512;

    const token = jwt.sign ( { username }, privateKey, {algorithm: HS512 }) 
    
    res.status(200).json({
        message: "login success",
        username,
        token
    })
};

module.exports = {
    signup,
    userHasNotExisted,
    truePWD,
    userExisted,
    signin
}