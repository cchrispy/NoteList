// handles requests to every route
// interacts with the database

var db = require('../db/config.js');
var request = require('request');
var app = require('./server.js');
var _ = require('underscore');

var User = db.User;
var Movie = db.Movie;

var omdb = 'http://www.omdbapi.com/?'

module.exports = {
  login: (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({username: username, password: password}).then(user => {
      if (user) {
        req.session.username = req.body.username;
        req.session.password = req.body.password;
        console.log('Logging in..');
        res.redirect('/');
      } else {
        res.send('Invalid username/password. Please refresh');
      }
    })
  },

  logout: (req, res, next) => {
    req.session.username = null;
    req.session.password = null;
    console.log('Logging out..');
    res.redirect('/login');
  },

  signup: (req, res, next) => {
    console.log('Signing up..');
    var username = req.body.username;
    var password = req.body.password;
    User.find({username: username}).then(users => {
      if (!users.length) {
        new User({username: username, password: password}).save()
        .then(user => {
          console.log('New user: ', user);
          req.session.username = req.body.username;
          req.session.password = req.body.password;
          res.redirect('/');
        })
      } else {
        console.log('That user already exists');
        res.redirect('/login');
      }
    })
  },

  checkSession: (req, res, next) => {
    var path = req.path;
    if (path === '/' && path !== '/login' && path !== '/signup') {
      if (!req.session.username || req.session.username === null) {
        res.redirect('/login');
      } else {
        next();
      }
    } else {
      next();
    }
  },

  fetchMovies: (req, res, next) => {
    // fetches movies on login
    var username = req.session.username;
    User.findOne({username: username}).then(user => {
      Movie.find({'_id': {
        $in: user.movieList
      }}).then(movies => {
        res.send(movies);
      })
    })
  },

  addMovie: (req, res, next) => {
    // sends movie info
    var movie = req.body.movie.split(' ').join('+');
    var url = omdb + 'tomatoes=true&t=' + movie;
    var username = req.session.username;
    Movie.find({title: req.body.movie}).then((movies) => {
      if (!movies.length) {
        // add movie to db if the query returned empty
        request(url, function(err, response, body) {
          if (err) {
            console.log('error from omdb request: ', err);
          } else {
            var data = JSON.parse(response.body);
            console.log('Movie data: ', data);
            var info = {
              title: data.Title,
              year: data.Year,
              img: data.Poster,
              length: data.Runtime,
              plot: data.Plot,
              rating: data.tomatoUserRating
            }
            new Movie(info).save().then(function(movie) {
              console.log('Saving movie to db..');
              console.log('Movie: ', movie);
              User.update({username: username},
                          {$push: {movieList: movie._id}},
                          {safe: true, upsert: true},
                          (err, model) => {
                            if (err) {
                              console.log('err updating user movieList', err);
                            }
                          });
              res.send(movie);
            })
          }
        })
      } else {
        console.log('Movie: ', movies[0]);
        User.update({username: username},
                    {$push: {movieList: movies[0]._id}},
                    {safe: true, upsert: true},
                    (err, model) => {
                      if (err) {
                        console.log('err updating user movieList', err);
                      }
                    });
        res.send(movies[0]);
      }
    }).catch((err) => {
      console.log('error in finding movies: ', err);
    })
  },

  checkUsers: (req, res, next) => {
    // finds users with matching movies
    var movie = req.body.movie;
    User.findOne({username: req.session.username}).then(user => {
      console.log('users movieList: ', user.movieList);
    })
  }
}