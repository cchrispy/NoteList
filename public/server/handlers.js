'use strict';

var db = require('../db/config.js');
var request = require('request');

var User = db.User;
var Movie = db.Movie;

var omdb = 'http://www.omdbapi.com/?';

module.exports = {
  addMovie: function addMovie(req, res, next) {
    var title = req.body.movie;
    var url = omdb + 's=' + title;
    request(url, function (err, response, body) {
      console.log('THIS IS THE URL: ', url);
      if (err) {
        console.log('error from omdb request: ', err);
      } else {
        console.log(JSON.parse(response.body).Search[0]);
      }
    });
    // new Movie({title: req.body.movie}).save();
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvaGFuZGxlcnMuanMiXSwibmFtZXMiOlsiZGIiLCJyZXF1aXJlIiwicmVxdWVzdCIsIlVzZXIiLCJNb3ZpZSIsIm9tZGIiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWRkTW92aWUiLCJyZXEiLCJyZXMiLCJuZXh0IiwidGl0bGUiLCJib2R5IiwibW92aWUiLCJ1cmwiLCJlcnIiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJTZWFyY2giXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsS0FBS0MsUUFBUSxpQkFBUixDQUFUO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxTQUFSLENBQWQ7O0FBRUEsSUFBSUUsT0FBT0gsR0FBR0csSUFBZDtBQUNBLElBQUlDLFFBQVFKLEdBQUdJLEtBQWY7O0FBRUEsSUFBSUMsT0FBTywwQkFBWDs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxZQUFVLGtCQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUM1QixRQUFJQyxRQUFRSCxJQUFJSSxJQUFKLENBQVNDLEtBQXJCO0FBQ0EsUUFBSUMsTUFBTVYsT0FBTyxJQUFQLEdBQWNPLEtBQXhCO0FBQ0FWLFlBQVFhLEdBQVIsRUFBYSxVQUFTQyxHQUFULEVBQWNDLFFBQWQsRUFBd0JKLElBQXhCLEVBQThCO0FBQ3pDSyxjQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNKLEdBQWpDO0FBQ0EsVUFBSUMsR0FBSixFQUFTO0FBQ1BFLGdCQUFRQyxHQUFSLENBQVksMkJBQVosRUFBeUNILEdBQXpDO0FBQ0QsT0FGRCxNQUVPO0FBQ0xFLGdCQUFRQyxHQUFSLENBQVlDLEtBQUtDLEtBQUwsQ0FBV0osU0FBU0osSUFBcEIsRUFBMEJTLE1BQTFCLENBQWlDLENBQWpDLENBQVo7QUFDRDtBQUNGLEtBUEQ7QUFRQTtBQUNEO0FBYmMsQ0FBakIiLCJmaWxlIjoiaGFuZGxlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGIgPSByZXF1aXJlKCcuLi9kYi9jb25maWcuanMnKTtcbnZhciByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xuXG52YXIgVXNlciA9IGRiLlVzZXI7XG52YXIgTW92aWUgPSBkYi5Nb3ZpZTtcblxudmFyIG9tZGIgPSAnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkTW92aWU6IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHZhciB0aXRsZSA9IHJlcS5ib2R5Lm1vdmllO1xuICAgIHZhciB1cmwgPSBvbWRiICsgJ3M9JyArIHRpdGxlO1xuICAgIHJlcXVlc3QodXJsLCBmdW5jdGlvbihlcnIsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICBjb25zb2xlLmxvZygnVEhJUyBJUyBUSEUgVVJMOiAnLCB1cmwpO1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgZnJvbSBvbWRiIHJlcXVlc3Q6ICcsIGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpLlNlYXJjaFswXSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBuZXcgTW92aWUoe3RpdGxlOiByZXEuYm9keS5tb3ZpZX0pLnNhdmUoKTtcbiAgfVxufSJdfQ==