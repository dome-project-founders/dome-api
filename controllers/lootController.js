/* eslint-disable no-console */
var { Loots } = require('../models/lootModel');
 
exports.getLootTime = (req, res ) => {
    Loots.find({ skill:req.params.skill }, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};