const express = require( 'express');
const router = express.Router();
 
// Require controller modules.
const landControllers = require('../controllers/landController')
 
router.get('/', landControllers.getAllLands);

router.get('/:id', landControllers.getLand);
 
module.exports = router;