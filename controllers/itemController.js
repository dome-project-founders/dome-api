/* eslint-disable no-console */
var { Items } = require('../models/itemModel');
const ObjectId = require('mongodb').ObjectId;


exports.getItemByLootTable = (req, res) => {
  Items.find({ skill: req.body.data.skill, rarity: { $in: req.body.data.rarity } }, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};

exports.getItemsByInventory = (req,res) => {
  let itemsToGet = [];
  req.body.forEach(item => {
    itemsToGet.push(ObjectId(item));
  });
  Items.find({"_id" : {
    "$in" : itemsToGet}}, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
}