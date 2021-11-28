const express = require('express');
const router = express.Router();

// On va chercher le controller
const mainController = require('../controllers/mainController');

// Et on ajoute les méthodes du controller au router
router.get('/', mainController.homePage);

// Route de détail d'un pokémon via son numéro
router.get('/pokemon/:numero', mainController.detailPage);

module.exports = router; 

