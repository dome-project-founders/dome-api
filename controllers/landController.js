/* eslint-disable no-console */
var { Lands } = require('../models/landModel');
 
exports.getAllLands = (req, res ) => {
    Lands.find((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};

exports.getLand = (req, res ) => {
  Lands.findOne({ land_id:req.params.id }, (err, result) => {
    if (!err) {
      res.send(result)
    } else {
      res.status(500).send((err)=> {
        console.log(err);
      })
    }
  })
};