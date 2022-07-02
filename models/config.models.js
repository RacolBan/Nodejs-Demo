const config = require("../config//db.config");
const { Sequelize } = require("sequelize");

const connection = new Sequelize(
    config.db,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        logging: false
    }
)
module.exports = connection;