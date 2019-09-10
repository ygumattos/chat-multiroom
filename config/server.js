/* Importando dependencias */
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

/* iniciando express */
const app = express();

/* configurar EJS */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurando express.static */
app.use(express.static('./app/public'));

/* body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar express-validator */
app.use(expressValidator());

/* Efetuando o autoload das rotas, models e controllers no app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exportando o objeto app */
module.exports = app;