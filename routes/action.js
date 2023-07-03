const express = require( 'express');
const router = express.Router();
 
// Require controller modules.
const actionControllers = require('../controllers/actionController')
 
router.get('/', actionControllers.getActionTime);

 
module.exports = router;