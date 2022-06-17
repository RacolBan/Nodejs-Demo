const express = require('express');
const app = express();
const router = require('./C-routers/router1');
const port = 3356;

// get router
app.use('/', router)

// listen server
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}...`);
})
