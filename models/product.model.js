const connection = require("./config.models");
const { DataTypes } = require('sequelize');


const ProductModel = connection.define("products",
    {
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {

                len: {
                    args: [3, 100],
                    msg: "invalid productName"
                }
            }
        },


    },
    {
        timestamps: true
    }
);

module.exports = ProductModel;