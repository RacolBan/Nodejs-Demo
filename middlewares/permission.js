const UserM = require("../models/user.model");
const permission = require("../config/permission");

const isAdmin = async (req, res, next) => {
    const username = req.username;
    try {

        const foundUser = await UserM.findOne({
            where: {
                username,
            }
        })
        if (foundUser) {

            if (foundUser.role !== permission.admin) {
                return res.status(401).json({ message: "Unauthorized! You must have Admin Role to access" })
            }
            next();
        }

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

const isMember = async (req, res, next) => {
    const username = req.username;
    try {

        const foundUser = await UserM.findOne({
            where: {
                username,
            }
        })
        if (foundUser) {

            if (foundUser.role !== permission.member) {
                return res.status(401).json({ message: "Unauthorized! You must have Member Role to access" })
            }
            next();
        }

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};
const isModerate = async (req, res, next) => {
    const username = req.username;
    try {

        const foundUser = await UserM.findOne({
            where: {
                username,
            }
        })
        if (foundUser) {

            if (foundUser.role !== permission.moderate) {
                return res.status(401).json({ message: "Unauthorized! You must have Moderate Role to access" })
            }
            next();
        }

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}


module.exports = {
    isAdmin,
    isMember,
    isModerate
}