const { UserModel } = require("../models/focus.model")
const md5 = require("md5");
const jwt = require("jsonwebtoken");

const userNotExist = async (req, res, next) => {
    const { username } = req.body;
    console.log(username);
    try {
        const found = await UserModel.findOne({
            where: {
                username,
            }
        })
        if (found) {
            return res.status(400).json({ message: "Cannot sign-up with the username or email already existed" })
        };
        next();

    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}
const userExist = async (req, res, next) => {
    const { username } = req.body;
    try {
        const found = await UserModel.findOne({
            where: {
                username,
            }
        })
        if (!found) {
            return res.status(404).json({ message: "username has not existed" })
        };
        next();

    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}
const correctPass = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const found = await UserModel.findOne({
            where: {
                username,
            }
        })
        const encrypted = md5(password);
        if (encrypted !== found.hash_pwd) {
            return res.status(401).json({ message: "wrong password" })
        };
        next();
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).json({ message: "forbidden: token may be invalid or expired" })
    }

    const privatekey = process.env.PRIVATEKEY;
    try {
        const { payload } = jwt.verify(token, privatekey);
        req.username = payload.username;
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
module.exports = {
    correctPass,
    userNotExist,
    userExist,
    verifyToken
}