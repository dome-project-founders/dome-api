/* eslint-disable no-console */
var { Users } = require('../models/userModel');
 
exports.getAllUsers = (req, res ) => {
    Users.find((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};