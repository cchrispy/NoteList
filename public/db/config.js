'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  movieList: [{ type: mongoose.Schema.ObjectId, ref: 'Movie' }]
});

var movieSchema = mongoose.Schema({
  title: { type: String, lowercase: true },
  year: String,
  rating: String, // Numbers in mongoose can't handle floats
  img: String,
  length: String,
  plot: String
});

module.exports.User = mongoose.model('User', userSchema);
module.exports.Movie = mongoose.model('Movie', movieSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYi9jb25maWcuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJtb3ZpZUxpc3QiLCJPYmplY3RJZCIsInJlZiIsIm1vdmllU2NoZW1hIiwidGl0bGUiLCJsb3dlcmNhc2UiLCJ5ZWFyIiwicmF0aW5nIiwiaW1nIiwibGVuZ3RoIiwicGxvdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJVc2VyIiwibW9kZWwiLCJNb3ZpZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxXQUFXQyxRQUFRLFVBQVIsQ0FBZjs7QUFFQSxJQUFJQyxhQUFhRixTQUFTRyxNQUFULENBQWdCO0FBQy9CQyxZQUFVLEVBQUNDLE1BQU1DLE1BQVAsRUFBZUMsVUFBVSxJQUF6QixFQURxQjtBQUUvQkMsWUFBVSxFQUFDSCxNQUFNQyxNQUFQLEVBQWVDLFVBQVUsSUFBekIsRUFGcUI7QUFHL0JFLGFBQVcsQ0FBQyxFQUFDSixNQUFNTCxTQUFTRyxNQUFULENBQWdCTyxRQUF2QixFQUFpQ0MsS0FBSyxPQUF0QyxFQUFEO0FBSG9CLENBQWhCLENBQWpCOztBQU1BLElBQUlDLGNBQWNaLFNBQVNHLE1BQVQsQ0FBZ0I7QUFDaENVLFNBQU8sRUFBQ1IsTUFBTUMsTUFBUCxFQUFlUSxXQUFXLElBQTFCLEVBRHlCO0FBRWhDQyxRQUFNVCxNQUYwQjtBQUdoQ1UsVUFBUVYsTUFId0IsRUFHaEI7QUFDaEJXLE9BQUtYLE1BSjJCO0FBS2hDWSxVQUFRWixNQUx3QjtBQU1oQ2EsUUFBTWI7QUFOMEIsQ0FBaEIsQ0FBbEI7O0FBU0FjLE9BQU9DLE9BQVAsQ0FBZUMsSUFBZixHQUFzQnRCLFNBQVN1QixLQUFULENBQWUsTUFBZixFQUF1QnJCLFVBQXZCLENBQXRCO0FBQ0FrQixPQUFPQyxPQUFQLENBQWVHLEtBQWYsR0FBdUJ4QixTQUFTdUIsS0FBVCxDQUFlLE9BQWYsRUFBd0JYLFdBQXhCLENBQXZCIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5cbnZhciB1c2VyU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcbiAgdXNlcm5hbWU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcbiAgcGFzc3dvcmQ6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcbiAgbW92aWVMaXN0OiBbe3R5cGU6IG1vbmdvb3NlLlNjaGVtYS5PYmplY3RJZCwgcmVmOiAnTW92aWUnfV1cbn0pXG5cbnZhciBtb3ZpZVNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHRpdGxlOiB7dHlwZTogU3RyaW5nLCBsb3dlcmNhc2U6IHRydWV9LFxuICB5ZWFyOiBTdHJpbmcsXG4gIHJhdGluZzogU3RyaW5nLCAvLyBOdW1iZXJzIGluIG1vbmdvb3NlIGNhbid0IGhhbmRsZSBmbG9hdHNcbiAgaW1nOiBTdHJpbmcsXG4gIGxlbmd0aDogU3RyaW5nLFxuICBwbG90OiBTdHJpbmdcbn0pXG5cbm1vZHVsZS5leHBvcnRzLlVzZXIgPSBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpO1xubW9kdWxlLmV4cG9ydHMuTW92aWUgPSBtb25nb29zZS5tb2RlbCgnTW92aWUnLCBtb3ZpZVNjaGVtYSk7Il19