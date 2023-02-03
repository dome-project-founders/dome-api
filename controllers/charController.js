/* eslint-disable no-console */
var { Chars } = require('../models/charModel');
 
exports.getAllChars = (req, res ) => {
    Chars.find((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};

exports.getChar = (req, res ) => {
    Chars.findOne({ username:req.params.username }, (err, result) => {
    if (!err) {
      res.send(result)
    } else {
      res.status(500).send((err)=> {
        console.log(err);
      })
    }
  })
};

exports.setChar = (req, res ) => {

    const data = {
        username: req.body.username,
        location: Math.floor(Math.random() * 15)
    }

    const char = new Chars(data);

    char.save((err, docs) => {
        if (!err) {
          res.send(docs)
        } else {
          res.status(500).send(err)
        }
      })
};

exports.setCharLocation = (req, res ) => {

  const data = {
      location: req.body.location,
  }
  Chars.findOneAndUpdate({ username:req.params.username }, { location:req.body.location }, (err, result) => {
    if (!err) {
      console.log(req.body);
      res.send(result);
    } else {
      res.status(500).send((err)=> {
        console.log(err);
      })
    }
  })
};