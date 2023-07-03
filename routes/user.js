const express = require( 'express');
const router = express.Router();
 
// Require controller modules.
const userControllers = require('../controllers/userController')
 
router.get('/', userControllers.getAllUsers);

router.post('/', userControllers.setUser);

router.get('/checkUsername/:name', userControllers.checkUsername);

router.get('/checkEmail/:email', userControllers.checkEmail);

router.post('/login', userControllers.login);

module.exports = router;