const { ProductModel } = require("../models/focus.model");
const { isAdmin, isMember } = require("../middlewares/permission");
const { verifyToken } = require("../middlewares/auth");
const router = require("express").Router();

router.post('/users/:userId/products', async (req, res) => {
    const { userId } = req.params;
    const { productName, catId } = req.body;

    try {
        let detailproduct = {
            productName: productName,
            catId: catId,
            userId: Number(userId)
        }
        const product = await ProductModel.create(detailproduct);
        console.log(product);
        if (product) {
            return res.status(201).json(product);
        }
        return res.status(401).json({ message: " failed" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/users/:userId/products', verifyToken, async (req, res) => {
    try {
        const { userId } = req.params;
        console.log((req.params));
        const product = await ProductModel.findAll({
            where: {
                userId,
            }
        });
        if (product) {
            return res.status(201).json(product);
        }
        return res.status(404).json({ message: " Not Found " })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router