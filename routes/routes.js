const express = require('express');
const router = express.Router();
const jwtController = require('../controllers/controllers');
const jwtmiddleware = require('../middleware/auth');

router.post('/register',jwtController.register);
router.post('/login',jwtController.login);
router.get('/dashboard',jwtmiddleware,jwtController.Welcome);

module.exports = router;


