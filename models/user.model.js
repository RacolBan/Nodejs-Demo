const connection = require("./config.models");
const DataTypes = require('sequelize');


const UserModel = connection.define("user",
    {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 25],
                    msg: "invalid fullname"
                }
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [3, 12],
                    msg: "invalid fullname"
                }
            }
        },
        hash_pwd: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: [/^[a-z0-9]+$/i],
                    msg: "invalid password"
                }
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
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "member",
            validate: {
                isIn: {
                    args: [['admin', 'moderate', 'member']],
                    msg: "invalid role"
                }
            }
        },

    },

)

module.exports = UserModel;