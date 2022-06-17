const express = require('express');
const router= express.Router();
const {UserModel, sequelize} = require('../models/user-model');
const bodyparser = require('body-parser');
// get middleawre for jsonparser // used to use bodyparser but now not;
const jsonParser= bodyparser.json();

// get connection server
// router.get('/', jsonParser, async (req,res)=>{
//     await sequelize.authenticate();
//     console.log('connect successfully!')
// });


// API post users from FE
router.post ('/', jsonParser, async (req,res) => {
    try {
    
        //get data from FE
        const data = req.body;
        console.log(data);
        
        if(data){
            const users = await UserModel.create(data);
            res.status(200);
            res.json(users);
        }else{
            res.status(404).json({message: "Not Found"})
        }
    }
    catch (error) {
        res.status(422).json({message: "Not Found"});
    }
});




// APi get the whole table
    // router.get('/', jsonParser, async (req,res)=> {

    //     try {
    //         const found = await UserModel.findAll();
    //         if(found){
    //             res.status(200);
    //             res.json(found)
    //         }else{
    //             res.status(404);
    //             res.json({message: "Not Found"})
    //         }

    //     } catch (error) {
    //         res.status(500);
    //         res.json({message: "Not Found"});
    //     }

    // });

// API get a specified user
    // router.get("/:id", jsonParser, async (req,res)=>{
    //     const { id } = req.params;
    //     try {
    //         const found = await UserModel.findOne({
    //             where:{
    //                 id,
    //             }
    //         });
    //          console.log(found);
    //         if(found){
    //             res.status(200);
    //             res.json(found);
    //         }else{
    //             res.status(404);
    //             res.json( {message: "Not Found"} );
    //         }
    //     }
    //      catch (error) {
    //         res.status(500);
    //         res.json({message: "Not Found"});
    //     }
    // });

// APi put to update existed users
//     router.put('/:id', jsonParser, async (req,res)=>{
//         // get user need to update
//         const {id: userID} = req.params;

//         // get updated data from FE
//         const {firstname, lastname} = req.body;
//         try {
//             //check whether user's id has existed in table?
//             const found = await UserModel.findByPk(id)
//             // if existed
//             if(found){
//                 await UserModel.update(
//                     {
//                   firstname, 
//                    lastname,
//                 },
//                 {
//                     where:{
//                         id: userID,
//                     }
//                 }
//                 )
//                 // update succesfully! 
//                 res.status(200).json({message : "update succesfully! "})
//             }else{
//                 res.status(404).json({message : "Not Found"})
//             }
//         } catch (error) {
//             res.status(500).json({message : "Not Found"})
//         }
// })

// API Delete to remove a existed user based on id

// router.delete('/:id', jsonParser, async (req,res)=>{
//     let { id } = req.params;

//     try {
//         // id is unique, find user with its id
//         const findUser = await UserModel.findByPk(id);
        
//         // if found
//         if(findUser){
//             await UserModel.destroy();
//             //no content send for this request    
//             res.status(204).send();
//         }else{
//             res.status(404).json({message: "Not Found"});
//         }
//     } catch (error) {
//         res.status(500).json({message: "Not Found"});
//     }
// })
module.exports = router;