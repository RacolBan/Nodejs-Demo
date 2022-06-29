// connect to server

const express = require("express");
const userRouter = require("./routes/user.router.js");
const productRouter = require("./routes/product.router.js");
const catRouter = require("./routes/cate.router")
require('dotenv').config();
const app = express();


app.use(express.json());
app.use("/api/v1", userRouter);
app.use("/api/v1/", productRouter);
app.use("/api/v1/category", catRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}...`);
})
