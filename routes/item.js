const express = require( 'express');
const router = express.Router();
 
// Require controller modules.
const itemControllers = require('../controllers/itemController')
 
router.post('/lootTable', itemControllers.getItemByLootTable);

router.post('/inventory', itemControllers.getItemsByInventory);

 
module.exports = router;