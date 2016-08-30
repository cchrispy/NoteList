var db = require('../db/config.js');
var request = require('request');

var User = db.User;
var Movie = db.Movie;

var omdb = 'http://www.omdbapi.com/?'

module.exports = {
  addMovie: (req, res, next) => {
    var movie = req.body.movie;
    var url = omdb + 'tomatoes=true&t=' + movie;
    request(url, function(err, response, body) {
      console.log('THIS IS THE URL: ', url);
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
        new Movie(info).save();
      }
    })
    // new Movie({title: req.body.movie}).save();
  }
}