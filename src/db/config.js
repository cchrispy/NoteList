var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  movieList: [{type: mongoose.Schema.ObjectId, ref: 'Movie'}]
})

var movieSchema = mongoose.Schema({
  title: String,
  year: String,
  rating: String, // Numbers in mongoose can't handle floats
  img: String,
  length: String,
  plot: String
})

module.exports.User = mongoose.model('User', userSchema);
module.exports.Movie = mongoose.model('Movie', movieSchema);