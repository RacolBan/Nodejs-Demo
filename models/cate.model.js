const connection = require("./config.models");
const { DataTypes } = require('sequelize');


const CatModel = connection.define("categories",
    {
        catName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: {
                    args: [/^[a-z0-9]+$/i],
                    msg: "invalid name"
                },
                len: {
                    args: [3, 50],
                    msg: "invalid catName"
                }
            }
        },

    },
    {
        timestamps: true
    }
);

module.exports = CatModel;