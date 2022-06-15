const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "admin",
    database: 'acient'
});

// create application/json parser
const jsonParser = bodyParser.json();

// get all customers
// router.get('/',jsonParser, (req, res)=>{
//     const queryStmt = "SELECT * FROM `customers`";

//     // simple query
//     connection.query(queryStmt,(err, results, fields)=>{
//         console.log( results);
//         res.json(results)
//     });
// })
router.get('/', jsonParser, (req, res) => {
    // data lay gia tri nhap tu url : user?username=kh
    const data = req.query.fullname;
    console.log(data);
    const queryStmt = `select * from customers where fullname = '${data}'`;

    // simple query
    connection.query(queryStmt, (err, results, fields) => {
        if (err) throw err;
        res.json(results)


    });
})
module.exports = router;