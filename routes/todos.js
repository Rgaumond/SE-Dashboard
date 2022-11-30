// routes/things.js routing file
"use strict";

const express = require("express");
let router = express.Router();

const db = require("../mongooseConnect");
//End points
const ToDo = require("../toDoModel");


// LIST 
router
.route("/")
.post( async (req,res)=>{
    let todos =await ToDo.find().exec();
    res.send({todos});
});

// VIEW TODO VIA ID
router
.route("/view/:customerid")
.post(async (req,res)=>{
    let payload = req.body.id;
    let todo = await ToDo.findOne({_id:payload});        
    res.send({todo});
  });

// ADD CUSTOMER
  router
  .route("/add")
  .post( async (req,res)=>{
    let newToDO = new ToDo(req.body);
    let newID = Math.floor(+new Date());
    newToDO._id = newID;
    await newToDO.save(function (err) {
    if (err) return console.error(err);
    });
    res.send({newID});
});

//UPDATE 
router.
route("/update")
.post( async (req,res)=>{
    let payload = req.body;
    let id = payload._id;
    delete payload._id;
    await ToDo.updateOne({_id:id},payload,function (err) {
        if (err) return console.error(err);
    });    
    res.send("done");
});

// DELETE
router.
route("/delete")
.post( async (req,res)=>{
    let payload = req.body._id;
    await ToDo.deleteOne({ _id: payload }).then(function(){
        res.send("deleted");
    }).catch(function(error){
        console.log(error); // Failure
    });
});

module.exports = router;