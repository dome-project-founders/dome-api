const express = require( 'express');
const router = express.Router();
 
// Require controller modules.
const lootControllers = require('../controllers/lootController')
 
router.get('/:skill', lootControllers.getLootTime);

 
module.exports = router;