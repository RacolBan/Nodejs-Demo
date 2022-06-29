const CatModel = require("../models/cate.model");
const { isAdmin } = require("../middlewares/permission");
const { verifyToken } = require("../middlewares/auth");
const router = require("express").Router();

router.post('/', async (req, res) => {
    const data = req.body;
    try {

        const category = await CatModel.create(data);
        if (category) {
            return res.status(201).json(category);
        }
        res.status(401).json({ message: "failed" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router