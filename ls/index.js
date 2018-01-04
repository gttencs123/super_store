let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');

let lodash = require('lodash');

let config = require('../config');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use('/', express.static((path.join(__dirname, 'www/dist'))));

app.listen(config.port);

module.exports = function (electronApp) {
    app.locals.electronApp = electronApp;
};