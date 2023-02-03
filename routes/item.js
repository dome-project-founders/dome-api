const express = require( 'express');
const router = express.Router();
 
// Require controller modules.
const itemControllers = require('../controllers/itemController')
 
router.get('/lootTable', itemControllers.getItemByLootTable);

 
module.exports = router;