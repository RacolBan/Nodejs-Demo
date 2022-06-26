const {UserModel} = require('../models/focus-models');
const md5 = require ('md5');
var jwt = require('jsonwebtoken');
require("dotenv").config();

const signup = async(req, res) =>{
    const {username, password: pwd, role,} = req.body;

    const decrypted = md5(pwd);
    try {
        const user = {
            username,
            pwd_hash:decrypted,
            iam_role: role
        }
            const newUser = await UserModel.create(user);

            if (newUser) {
                return res.status(201).json(newUser);
            } 
                res.status(400).json({message: "create new user unsuccesfully"})
            
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}

const signin = async (req, res) => {
    const {username} = req.body;
    const privateKey = process.env.PRIVATEKEY;
    const HS512 = process.env.HS512;
try {
    const token = jwt.sign ( { username }, privateKey, {expiresIn: 200, algorithm: HS512 }) 
    
    res.status(200).json({
        message: "login success",
        username,
        token
    })
} catch (error) {
    res.status(500).json({ error})
}
   
};

module.exports = {
    signup,
    signin
}