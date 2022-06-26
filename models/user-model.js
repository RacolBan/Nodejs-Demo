const connection = require('./config-model.js');
const DataTypes = require('sequelize');

const UserModel = connection.define("user",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // first_name: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // last_name: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        iam_role: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        // email: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true
        // },
        // phone: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true
        // },
        // address: {
        //     type: DataTypes.STRING,
        // },
        pwd_hash: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // is_pwd_salt: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: 0
        // },
        // pwd_algorithm: {
        //     type: DataTypes.STRING,
        // },
    },
    {
        timestamps: true,
    },
);
 
module.exports = UserModel;


