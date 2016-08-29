var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notelist');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/lib', express.static(path.join(__dirname, '../../node_modules')));

app.post('/movies/search', function(req, res, body) {
  console.log(req.body);
})

app.listen(8000);
console.log('Listening on 127.0.0.1:8000');