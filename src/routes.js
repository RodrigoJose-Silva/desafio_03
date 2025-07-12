const express = require('express');
const router = express.Router();
const loginController = require('./controllers/loginController');

// Rota de login
router.post('/login', loginController.login);

// Rota de lembrete de senha
router.post('/reminder', loginController.reminder);

module.exports = router; 