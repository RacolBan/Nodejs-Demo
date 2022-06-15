const express = require('express');
const app = express();
const router = require('./C-routers/router1')

const port = 3000;
app.use ('/users', router);

app.listen(port, ()=>{
  console.log('server running on http://localhost:3000');
})




 