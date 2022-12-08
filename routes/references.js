// routes/things.js routing file
"use strict";

const express = require("express");
let router = express.Router();

const db = require("../mongooseConnect");
//End points
const Reference = require("../models/referenceModel");

// LIST
router.route("/").post(async (req, res) => {
  let references = await Reference.find().exec();
  res.send({ references });
});

// VIEW TODO VIA ID
router.route("/view").post(async (req, res) => {
  let payload = req.body.id;
  let reference = await Reference.findOne({ _id: payload });
  res.send({ reference });
});

// ADD CUSTOMER
router.route("/add").post(async (req, res) => {
  let newToDO = new Reference(req.body);
  await newToDO.save(function (err) {
    if (err) return console.error(err);
  });
  res.send({ newToDO });
});

//UPDATE
router.route("/update").post(async (req, res) => {
  let payload = req.body;
  let id = payload._id;
  delete payload._id;
  await Reference.updateOne({ _id: id }, payload, function (err) {
    if (err) return console.error(err);
  });
  res.send("done");
});

// DELETE
router.route("/delete").post(async (req, res) => {
  let payload = req.body._id;
  await Reference.deleteOne({ _id: payload })
    .then(function () {
      res.send("deleted");
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
});

// DELETE ALL
router.route("/deleteAll").post(async (req, res) => {
  let payload = req.body._id;
  await Reference.deleteMany({ _id: { $gte: 0 } })
    .then(function () {
      res.send("deleted");
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
});

module.exports = router;
