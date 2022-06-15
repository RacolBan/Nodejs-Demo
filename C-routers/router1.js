const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { UserModel, sequelize } = require('../model/model')



// create application/json parser
const jsonParser = bodyParser.json();

// api get users
// router.get('/', jsonParser, async (req, res) =>{

// //   // authenticate de test connect
// //  await sequelize.authenticate();
// //  console.log("asdccccc")
//   const users = await UserModel.findAll();
//   console.log(users)
//   res.json(users);
// });

// api create users
router.post('/', jsonParser, async (req, res) => {

  //get data from FE
  const data = req.body;
  console.log(data)
  // execute query insert data 
  // just only post once
  const users = await UserModel.create(data);
  res.status(201);
  res.json(users);
});

// router.put('/', jsonParser, async (req, res)=>{

//   //update data from BE
//   const updateRow = await UserModel.update(
//     {firstname: "phuc"},
//     {
//       where: {
//         firstname: "khai"
//       }
//     }
//   )
//   if(updateRow){
//     console.log(`Updated row ${updateRow}`);
//     res.json(updateRow);
//   } else{
//     console.log("Model not found");
//   }
// })

// router.delete('/', jsonParser, async(req,res)=>{
//   //delete row table
//   const deleteRow = await UserModel.delete(
//     {where: {lastname: "nguyen"}}
//   )
// });

module.exports = router;
