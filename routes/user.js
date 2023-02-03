const express = require( 'express');
const router = express.Router();
 
// Require controller modules.
const userControllers = require('../controllers/userController')
 
router.get('/', userControllers.getAllUsers);

router.post('/', userControllers.setUser);

 
module.exports = router;