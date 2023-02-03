/* eslint-disable no-console */
var { Actions } = require('../models/actionModel');
 
exports.getActionTime = (req, res ) => {
    Actions.find({}, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};