const cookieParser = require("cookie-parser")
// Importing express module
const express = require("express")
const session = require('express-session');

//Importation du fichier de routage
const Routeur = require('./routes/route-general')
const bodyParser = require('body-parser')

//Déclaration, paramètrage et utilisation de l'app
let app = express()
app.use(cookieParser("60265d1a8ed252f615742e7380eb3674d4864f6c5b8ba38ce912792acc76965de3849f10399947fd9abde80c5554fdbae7d622a028df976df7f518bc606b1b16"));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/dependency'));
app.use(express.static('view'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', Routeur)


/* Lancement du serveur au port défini */
var server = app.listen(3000);

module.exports = app