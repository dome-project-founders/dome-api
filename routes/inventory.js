const express = require( 'express');
const router = express.Router();
 
// Require controller modules.
const InventoryControllers = require('../controllers/inventoryController')

router.get('/:userId', InventoryControllers.getInventory);
 
router.post('/:userId', InventoryControllers.setInventory);
module.exports = router;