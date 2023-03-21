/* eslint-disable no-console */
var { Inventories } = require('../models/inventoryModel');

exports.getInventory = (req, res ) => {
    Inventories.findOne({ userId:req.params.userId }, (err, result) => {
    if (!err) {
      res.send(result)
    } else {
      res.status(500).send((err)=> {
        console.log(err);
      })
    }
  })
};

exports.setInventory = (req, res ) => {
  Inventories.updateOne({ userId:req.params.userId },{$set:{"items": req.body}}, (err, result) => {
  if (!err) {
    res.send(result)
  } else {
    res.status(500).send((err)=> {
      console.log(err);
    })
  }
})
};