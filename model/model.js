const config = require('../config/db.config')
const { DataTypes, Sequelize } = require("sequelize");

// create conneciton
const sequelize = new Sequelize(
    config.DATABASE,
    config.USERNAME,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.DIALECT,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

// create database table Users

// model attributes are defined here
const UserModel = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

UserModel.sync({ force: true });

module.exports = {UserModel, sequelize};

  

