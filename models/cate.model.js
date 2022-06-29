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
                min: {
                    args: [3],
                    msg: "too short"
                },
                max: {
                    args: [50],
                    msg: "too long"
                }
            }
        },

    },
    {
        timestamps: true
    }
);

module.exports = CatModel;