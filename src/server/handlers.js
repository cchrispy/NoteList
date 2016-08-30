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
        req.session.picture = user.picture;
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
    req.session.picture = null;
    console.log('Logging out..');
    res.redirect('/login');
  },

  signup: (req, res, next) => {
    console.log('Signing up..');
    var username = req.body.username;
    var password = req.body.password;
    var picture = req.body.picture || '';
    User.find({username: username}).then(users => {
      if (!users.length) {
        new User({username: username, password: password, picture: picture}).save()
        .then(user => {
          console.log('New user: ', user);
          req.session.username = username;
          req.session.password = password;
          req.session.picture = picture;
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
    // fetches movies on login, and profile picture
    var username = req.session.username;
    var picture = req.session.picture;
    console.log(username, picture);
    User.findOne({username: username}).then(user => {
      Movie.find({'_id': {
        $in: user.movieList
      }}).then(movies => {
        res.send({movies: movies, picture: picture});
      })
    })
  },

  matchUser: (req, res, next) => {
    var match = req.body.match;
    User.findOne({username: match}).then(user => {
      console.log('Matched user found: ', user);
      res.send(user);
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
              res.send({matches: [],
                        movie: movie});
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
        return movies[0]
      }
    }).then((movie) => {
      // finds users with matching movies
      User.findOne({username: req.session.username}).then(user => {
        User.find({movieList: {$in: [movie._id]},
                   username: {$ne: req.session.username}}).then(users => {
          console.log('the matching users: ', users);
          res.send({matches: users,
                    movie: movie});
        })
      })
    }).catch((err) => {
      console.log('error in finding movies: ', err);
    })
  },
}