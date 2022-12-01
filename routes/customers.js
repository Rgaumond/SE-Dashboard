// routes/things.js routing file
"use strict";

const express = require("express");
let router = express.Router();

const db = require("../mongooseConnect");
//End points
const Customer = require("../customerModel");


// LIST 
router
.route("/")
.post( async (req,res)=>{
 
    let customers =await Customer.find().exec();
    res.send({customers});
});

// VIEW CUSTOMER VIA ID
router
.route("/view/:customerid")
.post(async (req,res)=>{
    let payload = req.body.id;
    let customer = await Customer.findOne({_id:payload});        
    res.send({customer});
  });

// ADD CUSTOMER
  router
  .route("/add")
  .post( async (req,res)=>{
    let newCustomer = new Customer(req.body);
    let newID = Math.floor(+new Date());
    newCustomer._id = newID;
    await newCustomer.save(function (err) {
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
    await Customer.updateOne({_id:id},payload,function (err) {
        if (err) return console.error(err);
    });    
    res.send("done");
});

// DELETE
router.
route("/delete")
.post( async (req,res)=>{
    let payload = req.body._id;
    await Customer.deleteOne({ _id: payload }).then(function(){
        res.send("deleted");
    }).catch(function(error){
        console.log(error); // Failure
    });
});

// FIND 
router
.route("/find")
.post( async (req,res)=>{
    //var regexpName = new RegExp("^"+req.body.name,"i" );
    var regexpName = new RegExp(req.body.name,"i" );
    let customers =await Customer.find({name:regexpName});
    res.send({customers});
});



module.exports = router;