const express = require('express');
const { register, login, logout, loadUserProfile } = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/auth');

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/me').get(isAuthenticated, loadUserProfile);

module.exports = router;