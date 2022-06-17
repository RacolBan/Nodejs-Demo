const config = require('../Db-config/db.config');
const {Sequelize, DataTypes} = require('sequelize');


//create install sequelize
const sequelize = new Sequelize(
    config.DATABASE,
    config.USERNAME,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.DIALECT
    }
);

// create model 
const UserModel = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "People",
    }
);

// sync()  This creates the table if it doesn't exist 
// (and does nothing if it already exists)
UserModel.sync();

module.exports={
    sequelize,
    UserModel
};
