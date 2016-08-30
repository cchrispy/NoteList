var db = require('../db/config.js');
var request = require('request');
var app = require('./server.js');
var _ = require('underscore');

var User = db.User;
var Movie = db.Movie;

var omdb = 'http://www.omdbapi.com/?'

module.exports = {
  login: (req, res, next) => {
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    console.log('LOGIN SESSION: ', req.session);
    res.redirect('/');
  },
  logout: (req, res, next) => {
    console.log('uhhhh');
    req.session.username = null;
    req.session.password = null;
    console.log('LOGOUT SESSION: ', req.session);
    res.redirect('/login');
  },
  signup: (req, res, next) => {
    console.log('signing up');
    console.log('username: ', req.body.username);
    console.log('password: ', req.body.password);
    res.redirect('/');
  },
  checkSession: (req, res, next) => {
    console.log(req.session);
    // console.log(req.session);
    // if (req.session.username !== '') {
    //   next();
    // } else {
    //   res.redirect('/login');
    // }
    next();
  },
  addMovie: (req, res, next) => {
    var movie = req.body.movie.split(' ').join('+');
    var url = omdb + 'tomatoes=true&t=' + movie;
    Movie.find({title: req.body.movie}).then((movies) => {
      // add movie to db if the query returned empty
      if (!movies.length) {
        request(url, function(err, response, body) {
          if (err) {
            console.log('error from omdb request: ', err);
          } else {
            var data = JSON.parse(response.body);
            console.log(data);
            var info = {
              title: data.Title,
              year: data.Year,
              img: data.Poster,
              length: data.Runtime,
              plot: data.Plot,
              rating: data.tomatoUserRating
            }
            new Movie(info).save().then(function(movie) {
              console.log('saving movie to db');
              res.send(movie);
            })
          }
        })
      } else {
        res.send(movies[0]);
      }
    }).catch((err) => {
      console.log('error in finding movies: ', err);
    })
  }
}