const express = require('express');

//Importation du fichier controller
const Controller = require('../controller/controller-general');
//création du routeur Express pour ce module
const routeur = express.Router();


//Définition des routes et des fonctions controller associées
routeur.get('/', Controller.home);




module.exports = routeur;