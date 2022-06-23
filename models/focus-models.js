const UserModel = require ("./user-model");
const BookModel = require ("./book-model");

UserModel.sync();
BookModel.sync();

module.exports = {
    UserModel,
    BookModel,
}