var db = require('../db/config.js');
var request = require('request');

var User = db.User;
var Movie = db.Movie;

var omdb = 'http://www.omdbapi.com/?'

module.exports = {
  addMovie: (req, res, next) => {
    var title = req.body.movie;
    var url = omdb + 's=' + title;
    request(url, function(err, response, body) {
      console.log('THIS IS THE URL: ', url);
      if (err) {
        console.log('error from omdb request: ', err);
      } else {
        console.log(JSON.parse(response.body).Search[0]);
      }
    })
    // new Movie({title: req.body.movie}).save();
  }
}