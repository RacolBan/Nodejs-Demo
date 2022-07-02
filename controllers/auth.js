const { UserModel } = require("../models/focus.model")
const jwt = require('jsonwebtoken');
require('dotenv').config();
const md5 = require('md5');

const signUP = async (req, res) => {
    const { fullname, username, password, email, role } = req.body;

    try {
        const encrypted = md5(password);

        const user = {
            fullname,
            username,
            hash_pwd: encrypted,
            email,
            role
        }
        const newUser = await UserModel.create(user);

        if (newUser) {
            return res.status(201).json(newUser);
        }
        res.status(400).json({ message: "create failed" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const signIN = async (req, res) => {
    const { username } = req.body;
    const privatekey = process.env.PRIVATEKEY;
    const HS512 = process.env.ALGORITHM;
    const payload = {
        username,
    }
    try {
        const token = jwt.sign({ payload }, privatekey, { algorithm: HS512, expiresIn: 600 });
        const data = jwt.verify(token, privatekey)
        console.log(data);
        res.status(201).json({
            message: "login success!",
            token,
            payload,

        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const listUser = await UserModel.findAll();
        if (listUser) {
            return res.status(200).json(listUser);
        }
        res.status(404).json({ message: "Not Found" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    signUP,
    signIN,
    getUsers
}