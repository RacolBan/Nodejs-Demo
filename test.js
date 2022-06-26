var jwt = require('jsonwebtoken');
require("dotenv").config();
const privateKey = process.env.PRIVATEKEY;
// token la gia tri da duoc ma hoa
const token = jwt.sign({ username: "khai" }, privateKey, { algorithm:"HS512" })

console.log(token)
// sign() asynchronous // data=token
jwt.verify(token, privateKey,  (err, data) => {
    console.log("data: " + data.username )
})

console.log("aaa");


const data = jwt.verify(token, privateKey)

console.log(data);