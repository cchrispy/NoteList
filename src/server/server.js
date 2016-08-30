var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var handlers = require('./handlers.js');
var session = require('express-session');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/notelist');

var app = express();

app.use(session({secret: 'secret', username: null, password: null, resave: true, saveUninitialized: true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', handlers.checkSession, express.static(path.join(__dirname, '../client'), {redirect: false}));
app.use('/lib', express.static(path.join(__dirname, '../../node_modules'), {redirect: false}));
app.use('/login', express.static(path.join(__dirname, '../client/pages/login.html'), {redirect: false}))
app.use('/logout', handlers.logout);
app.use('/signup', express.static(path.join(__dirname, '../client/pages/signup.html'), {redirect: false}))

app.get('/movies/search', handlers.fetchMovies);


app.post('/signup', handlers.signup);
app.post('/login', handlers.login);
app.post('/movies/search', handlers.addMovie);

app.listen(8000);
console.log('Listening on 127.0.0.1:8000');

module.exports = app;