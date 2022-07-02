const UserModel = require("./user.model");
const CatModel = require("./cate.model");
const ProductModel = require("./product.model");



UserModel.hasMany(ProductModel, {
    foreignKey: {
        name: "userId",
    }
});
ProductModel.belongsTo(UserModel, {
    foreignKey: {
        name: "userId",
    }
});


CatModel.hasMany(ProductModel, {
    foreignKey: {
        name: "catId",
    }
});
ProductModel.belongsTo(CatModel, {
    foreignKey: {
        name: "catId",
    }
});

UserModel.sync();
CatModel.sync();
ProductModel.sync();

module.exports = {
    UserModel,
    ProductModel,
    CatModel
}