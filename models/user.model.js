const connection = require("./config.models");
const DataTypes = require('sequelize');


const UserModel = connection.define("user",
    {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: {
                    args: [3],
                    msg: " fullname is too short"
                },
                max: {
                    args: [25],
                    msg: " fullname is too long"
                }
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: {
                    args: [/^[a-z]+$/i],
                    msg: "invalid name"
                },
                min: {
                    args: [3],
                    msg: "your username is too short"
                },
                max: {
                    args: [12],
                    msg: "your username is too long"
                },

            }
        },
        hash_pwd: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: [/^[a-z0-9]+$/i],
                    msg: "invalid password"
                },
                min: {
                    args: [3],
                    msg: "your password is too short"
                },
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "invalid email"
                }
            }
        },
        role: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            defaultValue: 2,
            validate: {
                isNumeric: {
                    msg: "just number"
                }
            }
        },

    },

)

module.exports = UserModel;