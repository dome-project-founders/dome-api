/* eslint-disable no-console */
var { Items } = require('../models/itemModel');

exports.getItemByLootTable = (req, res) => {
  Items.find({ skill: req.body.data.skill, rarity: { $in: req.body.data.rarity } }, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};