var db = require('../db/config.js');
var request = require('request');

var User = db.User;
var Movie = db.Movie;

var omdb = 'http://www.omdbapi.com/?'

module.exports = {
  addMovie: (req, res, next) => {
    var movie = req.body.movie.split(' ').join('+');
    var url = omdb + 'tomatoes=true&t=' + movie;
    Movie.find({title: req.body.movie.toLowerCase()}).then((movies) => {
      // add movie to db if the query returned empty
      if (!movies.length) {
        request(url, function(err, response, body) {
          if (err) {
            console.log('error from omdb request: ', err);
          } else {
            var data = JSON.parse(response.body);
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