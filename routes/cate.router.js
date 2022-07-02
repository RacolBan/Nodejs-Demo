const { CatModel } = require("../models/focus.model");
const { isAdmin } = require("../middlewares/permission");
const { verifyToken } = require("../middlewares/auth");
const router = require("express").Router();

router.post('/', async (req, res) => {
    const data = req.body;
    try {

        const categories = await CatModel.bulkCreate(data);
        if (categories) {
            return res.status(201).json(categories);
        }
        res.status(401).json({ message: "failed" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router