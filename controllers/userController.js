const bcrypt = require("bcrypt");
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

exports.setUser = (req, res) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const data = {
      username: req.body.username,
      email:req.body.email,
      password: hash
    }
  
    const user = new Users(data);
  
    user.save((err, docs) => {
      if (!err) {
        res.send(docs)
      } else {
        res.status(500).send(err)
      }
    })
  });
};