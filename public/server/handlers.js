'use strict';

var db = require('../db/config.js');
var request = require('request');
var app = require('./server.js');
var _ = require('underscore');

var User = db.User;
var Movie = db.Movie;

var omdb = 'http://www.omdbapi.com/?';

module.exports = {
  login: function login(req, res, next) {
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    console.log('LOGIN SESSION: ', req.session);
    res.redirect('/');
  },
  logout: function logout(req, res, next) {
    console.log('uhhhh');
    req.session.username = null;
    req.session.password = null;
    console.log('LOGOUT SESSION: ', req.session);
    res.redirect('/login');
  },
  signup: function signup(req, res, next) {
    console.log('signing up');
    console.log('username: ', req.body.username);
    console.log('password: ', req.body.password);
    var username = req.body.username;
    var password = req.body.password;
    User.find({ username: username }).then(function (users) {
      if (!users.length) {
        new User({ username: username, password: password }).save().then(function (user) {
          console.log('new user: ', user);
          res.redirect('/');
        });
      } else {
        console.log('that user already exists');
        res.redirect('/login');
      }
    });
  },
  checkSession: function checkSession(req, res, next) {
    console.log(req.session);
    // console.log(req.session);
    // if (req.session.username !== '') {
    //   next();
    // } else {
    //   res.redirect('/login');
    // }
    next();
  },
  addMovie: function addMovie(req, res, next) {
    var movie = req.body.movie.split(' ').join('+');
    var url = omdb + 'tomatoes=true&t=' + movie;
    Movie.find({ title: req.body.movie }).then(function (movies) {
      // add movie to db if the query returned empty
      if (!movies.length) {
        request(url, function (err, response, body) {
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
            };
            new Movie(info).save().then(function (movie) {
              console.log('saving movie to db');
              res.send(movie);
            });
          }
        });
      } else {
        res.send(movies[0]);
      }
    }).catch(function (err) {
      console.log('error in finding movies: ', err);
    });
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvaGFuZGxlcnMuanMiXSwibmFtZXMiOlsiZGIiLCJyZXF1aXJlIiwicmVxdWVzdCIsImFwcCIsIl8iLCJVc2VyIiwiTW92aWUiLCJvbWRiIiwibW9kdWxlIiwiZXhwb3J0cyIsImxvZ2luIiwicmVxIiwicmVzIiwibmV4dCIsInNlc3Npb24iLCJ1c2VybmFtZSIsImJvZHkiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsImxvZ291dCIsInNpZ251cCIsImZpbmQiLCJ0aGVuIiwidXNlcnMiLCJsZW5ndGgiLCJzYXZlIiwidXNlciIsImNoZWNrU2Vzc2lvbiIsImFkZE1vdmllIiwibW92aWUiLCJzcGxpdCIsImpvaW4iLCJ1cmwiLCJ0aXRsZSIsIm1vdmllcyIsImVyciIsInJlc3BvbnNlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImluZm8iLCJUaXRsZSIsInllYXIiLCJZZWFyIiwiaW1nIiwiUG9zdGVyIiwiUnVudGltZSIsInBsb3QiLCJQbG90IiwicmF0aW5nIiwidG9tYXRvVXNlclJhdGluZyIsInNlbmQiLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxLQUFLQyxRQUFRLGlCQUFSLENBQVQ7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUlFLE1BQU1GLFFBQVEsYUFBUixDQUFWO0FBQ0EsSUFBSUcsSUFBSUgsUUFBUSxZQUFSLENBQVI7O0FBRUEsSUFBSUksT0FBT0wsR0FBR0ssSUFBZDtBQUNBLElBQUlDLFFBQVFOLEdBQUdNLEtBQWY7O0FBRUEsSUFBSUMsT0FBTywwQkFBWDs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxTQUFPLGVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQ3pCRixRQUFJRyxPQUFKLENBQVlDLFFBQVosR0FBdUJKLElBQUlLLElBQUosQ0FBU0QsUUFBaEM7QUFDQUosUUFBSUcsT0FBSixDQUFZRyxR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SEQ7QUFJVHJCLHNCQUFRYSxLQUFLUyxPQUpKO0FBS1RDLG9CQUFNVixLQUFLVyxJQUxGO0FBTVRDLHNCQUFRWixLQUFLYTtBQU5KLGFBQVg7QUFRQSxnQkFBSTlDLEtBQUosQ0FBVW9DLElBQVYsRUFBZ0JmLElBQWhCLEdBQXVCSCxJQUF2QixDQUE0QixVQUFTTyxLQUFULEVBQWdCO0FBQzFDYixzQkFBUUMsR0FBUixDQUFZLG9CQUFaO0FBQ0FQLGtCQUFJeUMsSUFBSixDQUFTdEIsS0FBVDtBQUNELGFBSEQ7QUFJRDtBQUNGLFNBbkJEO0FBb0JELE9BckJELE1BcUJPO0FBQ0xuQixZQUFJeUMsSUFBSixDQUFTakIsT0FBTyxDQUFQLENBQVQ7QUFDRDtBQUNGLEtBMUJELEVBMEJHa0IsS0ExQkgsQ0EwQlMsVUFBQ2pCLEdBQUQsRUFBUztBQUNoQm5CLGNBQVFDLEdBQVIsQ0FBWSwyQkFBWixFQUF5Q2tCLEdBQXpDO0FBQ0QsS0E1QkQ7QUE2QkQ7QUEzRWMsQ0FBakIiLCJmaWxlIjoiaGFuZGxlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGIgPSByZXF1aXJlKCcuLi9kYi9jb25maWcuanMnKTtcbnZhciByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xudmFyIGFwcCA9IHJlcXVpcmUoJy4vc2VydmVyLmpzJyk7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcblxudmFyIFVzZXIgPSBkYi5Vc2VyO1xudmFyIE1vdmllID0gZGIuTW92aWU7XG5cbnZhciBvbWRiID0gJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vPydcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvZ2luOiAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICByZXEuc2Vzc2lvbi51c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lO1xuICAgIHJlcS5zZXNzaW9uLnBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmQ7XG4gICAgY29uc29sZS5sb2coJ0xPR0lOIFNFU1NJT046ICcsIHJlcS5zZXNzaW9uKTtcbiAgICByZXMucmVkaXJlY3QoJy8nKTtcbiAgfSxcbiAgbG9nb3V0OiAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBjb25zb2xlLmxvZygndWhoaGgnKTtcbiAgICByZXEuc2Vzc2lvbi51c2VybmFtZSA9IG51bGw7XG4gICAgcmVxLnNlc3Npb24ucGFzc3dvcmQgPSBudWxsO1xuICAgIGNvbnNvbGUubG9nKCdMT0dPVVQgU0VTU0lPTjogJywgcmVxLnNlc3Npb24pO1xuICAgIHJlcy5yZWRpcmVjdCgnL2xvZ2luJyk7XG4gIH0sXG4gIHNpZ251cDogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NpZ25pbmcgdXAnKTtcbiAgICBjb25zb2xlLmxvZygndXNlcm5hbWU6ICcsIHJlcS5ib2R5LnVzZXJuYW1lKTtcbiAgICBjb25zb2xlLmxvZygncGFzc3dvcmQ6ICcsIHJlcS5ib2R5LnBhc3N3b3JkKTtcbiAgICB2YXIgdXNlcm5hbWUgPSByZXEuYm9keS51c2VybmFtZTtcbiAgICB2YXIgcGFzc3dvcmQgPSByZXEuYm9keS5wYXNzd29yZDtcbiAgICBVc2VyLmZpbmQoe3VzZXJuYW1lOiB1c2VybmFtZX0pLnRoZW4odXNlcnMgPT4ge1xuICAgICAgaWYgKCF1c2Vycy5sZW5ndGgpIHtcbiAgICAgICAgbmV3IFVzZXIoe3VzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkfSkuc2F2ZSgpXG4gICAgICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCduZXcgdXNlcjogJywgdXNlcik7XG4gICAgICAgICAgcmVzLnJlZGlyZWN0KCcvJyk7XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndGhhdCB1c2VyIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIHJlcy5yZWRpcmVjdCgnL2xvZ2luJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgY2hlY2tTZXNzaW9uOiAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXEuc2Vzc2lvbik7XG4gICAgLy8gY29uc29sZS5sb2cocmVxLnNlc3Npb24pO1xuICAgIC8vIGlmIChyZXEuc2Vzc2lvbi51c2VybmFtZSAhPT0gJycpIHtcbiAgICAvLyAgIG5leHQoKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgcmVzLnJlZGlyZWN0KCcvbG9naW4nKTtcbiAgICAvLyB9XG4gICAgbmV4dCgpO1xuICB9LFxuICBhZGRNb3ZpZTogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgdmFyIG1vdmllID0gcmVxLmJvZHkubW92aWUuc3BsaXQoJyAnKS5qb2luKCcrJyk7XG4gICAgdmFyIHVybCA9IG9tZGIgKyAndG9tYXRvZXM9dHJ1ZSZ0PScgKyBtb3ZpZTtcbiAgICBNb3ZpZS5maW5kKHt0aXRsZTogcmVxLmJvZHkubW92aWV9KS50aGVuKChtb3ZpZXMpID0+IHtcbiAgICAgIC8vIGFkZCBtb3ZpZSB0byBkYiBpZiB0aGUgcXVlcnkgcmV0dXJuZWQgZW1wdHlcbiAgICAgIGlmICghbW92aWVzLmxlbmd0aCkge1xuICAgICAgICByZXF1ZXN0KHVybCwgZnVuY3Rpb24oZXJyLCByZXNwb25zZSwgYm9keSkge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBmcm9tIG9tZGIgcmVxdWVzdDogJywgZXJyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuVGl0bGUsXG4gICAgICAgICAgICAgIHllYXI6IGRhdGEuWWVhcixcbiAgICAgICAgICAgICAgaW1nOiBkYXRhLlBvc3RlcixcbiAgICAgICAgICAgICAgbGVuZ3RoOiBkYXRhLlJ1bnRpbWUsXG4gICAgICAgICAgICAgIHBsb3Q6IGRhdGEuUGxvdCxcbiAgICAgICAgICAgICAgcmF0aW5nOiBkYXRhLnRvbWF0b1VzZXJSYXRpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ldyBNb3ZpZShpbmZvKS5zYXZlKCkudGhlbihmdW5jdGlvbihtb3ZpZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nIG1vdmllIHRvIGRiJyk7XG4gICAgICAgICAgICAgIHJlcy5zZW5kKG1vdmllKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnNlbmQobW92aWVzWzBdKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gZmluZGluZyBtb3ZpZXM6ICcsIGVycik7XG4gICAgfSlcbiAgfVxufSJdfQ==