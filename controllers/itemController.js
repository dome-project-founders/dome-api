/* eslint-disable no-console */
var { Items } = require('../models/itemModel');

exports.getItemByLootTable = (req, res) => {
  Items.find({ skill: req.body.skill, rarity: { $in: req.body.rarity } }, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};