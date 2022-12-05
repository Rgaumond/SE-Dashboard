// routes/things.js routing file
"use strict";

const express = require("express");
let router = express.Router();

const db = require("../mongooseConnect");
//End points
const Stack = require("../models/stackModel");


// LIST 
router
.route("/")
.post( async (req,res)=>{
    let stacks =await Stack.find().exec();
    res.send({stacks});
});

// VIEW TODO VIA ID
router
.route("/view")
.post(async (req,res)=>{
    let payload = req.body.id;
    let stack = await Stack.findOne({_id:payload});        
    res.send({stack});
  });

// ADD CUSTOMER
  router
  .route("/add")
  .post( async (req,res)=>{
    let newToDO = new Stack(req.body);
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
    await Stack.updateOne({_id:id},payload,function (err) {
        if (err) return console.error(err);
    });    
    res.send("done");
});

// DELETE
router.
route("/delete")
.post( async (req,res)=>{
    let payload = req.body._id;
    await Stack.deleteOne({ _id: payload }).then(function(){
        res.send("deleted");
    }).catch(function(error){
        console.log(error); // Failure
    });
});

module.exports = router;