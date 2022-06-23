const connection = require('./config-model.js')
const DataTypes = require('sequelize');

const BookModel = connection.define("book",
    {
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        author:{
            type: DataTypes.STRING,
            defaultValue: "null"
        }

    },
    {
        timestamps: true,
    }

);

module.exports = BookModel;
