var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(__dirname+'/public/dist/public'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/nav_authors', {useNewUrlParser: true});

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(2100, function(){
    console.log('on port 2100');
})