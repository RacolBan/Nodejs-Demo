const UserModel = require("./user.model");
const CatModel = require("./cate.model");
const ProductModel = require("./product.model");



UserModel.hasMany(ProductModel, {
    foreignKey: {
        name: "userId",
    },
    as: "products",
});
ProductModel.belongsTo(UserModel, {
    foreignKey: {
        name: "userId",
    },
    as: "user",
});


CatModel.hasMany(ProductModel, {
    foreignKey: {
        name: "catId",
    },
    as: "products",
});
ProductModel.belongsTo(CatModel, {
    foreignKey: {
        name: "catId",
    },
    as: "categories",
});

UserModel.sync();
CatModel.sync();
ProductModel.sync();

module.exports = {
    ProductModel,
    UserModel,
    CatModel
}