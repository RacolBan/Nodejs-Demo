const ProductModel = require("../models/cate.model");
const { isAdmin, isMember } = require("../middlewares/permission");
const { verifyToken } = require("../middlewares/auth");
const router = require("express").Router();

router.post('/', verifyToken, isAdmin, async (req, res) => {
    const data = req.body;
    try {

        const product = await ProductModel.create(data);
        if (product) {
            return res.status(201).json(product);
        }
        res.status(401).json({ message: " failed" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/', isMember, async (req, res) => {
    try {
        const product = await ProductModel.findAll();
        if (product) {
            return res.status(201).json(product);
        }
        res.status(404).json({ message: " Not Found " })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router