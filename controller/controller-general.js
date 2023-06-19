//Importation du middleware pour les sessions avec Node
var ObjectId = require('mongodb').ObjectId;
//Importation de la connexion à la bdd
const client = require('../config/database');
//Importation du fichier models
const {models_general} = require('../models/models-general');


module.exports = {
    home: (req, res) => {
        // Utiliser la fonction du modèle pour obtenir les cookies de session et rendre la vue en passant ces données en tant que paramètre
        res.render("home");
    },
}