const express = require('express');
const userRouter = require('./router/user-router.js');
const bookRouter = require('./router/book-router.js');
const app = express();

// system apply json to all under level
app.use(express.json());
require("dotenv").config();

app.use("/api", userRouter);
app.use("/book", bookRouter)

// get PORT from file .env, if novalue will get port = 3000
const port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log(`server running on http://localhost:${port}...`);
})
