var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  movieList: [{type: mongoose.Schema.ObjectId, ref: 'Movie'}]
})

var movieSchema = mongoose.Schema({
  title: String,
  rating: String, // Numbers in mongoose can't handle floats
  year: Number,
  img: String
})

module.exports.User = mongoose.model('User', userSchema);
module.exports.Movie = mongoose.model('Movie', movieSchema);