const express = require( 'express');
const router = express.Router();
 
// Require controller modules.
const charControllers = require('../controllers/charController')
 
router.get('/', charControllers.getAllChars);

router.get('/:username', charControllers.getChar);

router.post('/', charControllers.setChar);

router.put('/location/:username', charControllers.setCharLocation);
 
module.exports = router;