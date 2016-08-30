'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var handlers = require('./handlers.js');
var session = require('express-session');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/notelist');

var app = express();

app.use(session({ secret: 'secret', username: null, password: null, resave: true, saveUninitialized: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/', handlers.checkSession, express.static(path.join(__dirname, '../client')));
app.use('/lib', express.static(path.join(__dirname, '../../node_modules')));
app.use('/login', express.static(path.join(__dirname, '../client/pages/login.html')));
app.use('/signup', express.static(path.join(__dirname, '../client/pages/signup.html')));

app.get('/logout', handlers.logout);
app.post('/login', handlers.login);
app.post('/movies/search', handlers.addMovie);

app.listen(8000);
console.log('Listening on 127.0.0.1:8000');

module.exports = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvc2VydmVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwicGF0aCIsImJvZHlQYXJzZXIiLCJtb25nb29zZSIsImhhbmRsZXJzIiwic2Vzc2lvbiIsIlByb21pc2UiLCJjb25uZWN0IiwiYXBwIiwidXNlIiwic2VjcmV0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImNoZWNrU2Vzc2lvbiIsInN0YXRpYyIsImpvaW4iLCJfX2Rpcm5hbWUiLCJnZXQiLCJsb2dvdXQiLCJwb3N0IiwibG9naW4iLCJhZGRNb3ZpZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVVDLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUMsT0FBT0QsUUFBUSxNQUFSLENBQVg7QUFDQSxJQUFJRSxhQUFhRixRQUFRLGFBQVIsQ0FBakI7QUFDQSxJQUFJRyxXQUFXSCxRQUFRLFVBQVIsQ0FBZjtBQUNBLElBQUlJLFdBQVdKLFFBQVEsZUFBUixDQUFmO0FBQ0EsSUFBSUssVUFBVUwsUUFBUSxpQkFBUixDQUFkO0FBQ0FHLFNBQVNHLE9BQVQsR0FBbUJOLFFBQVEsVUFBUixDQUFuQjs7QUFFQUcsU0FBU0ksT0FBVCxDQUFpQiw4QkFBakI7O0FBRUEsSUFBSUMsTUFBTVQsU0FBVjs7QUFFQVMsSUFBSUMsR0FBSixDQUFRSixRQUFRLEVBQUNLLFFBQVEsUUFBVCxFQUFtQkMsVUFBVSxJQUE3QixFQUFtQ0MsVUFBVSxJQUE3QyxFQUFtREMsUUFBUSxJQUEzRCxFQUFpRUMsbUJBQW1CLElBQXBGLEVBQVIsQ0FBUjtBQUNBTixJQUFJQyxHQUFKLENBQVFQLFdBQVdhLElBQVgsRUFBUjtBQUNBUCxJQUFJQyxHQUFKLENBQVFQLFdBQVdjLFVBQVgsQ0FBc0IsRUFBQ0MsVUFBVSxJQUFYLEVBQXRCLENBQVI7O0FBRUE7QUFDQVQsSUFBSUMsR0FBSixDQUFRLEdBQVIsRUFBYUwsU0FBU2MsWUFBdEIsRUFBb0NuQixRQUFRb0IsTUFBUixDQUFlbEIsS0FBS21CLElBQUwsQ0FBVUMsU0FBVixFQUFxQixXQUFyQixDQUFmLENBQXBDO0FBQ0FiLElBQUlDLEdBQUosQ0FBUSxNQUFSLEVBQWdCVixRQUFRb0IsTUFBUixDQUFlbEIsS0FBS21CLElBQUwsQ0FBVUMsU0FBVixFQUFxQixvQkFBckIsQ0FBZixDQUFoQjtBQUNBYixJQUFJQyxHQUFKLENBQVEsUUFBUixFQUFrQlYsUUFBUW9CLE1BQVIsQ0FBZWxCLEtBQUttQixJQUFMLENBQVVDLFNBQVYsRUFBcUIsNEJBQXJCLENBQWYsQ0FBbEI7QUFDQWIsSUFBSUMsR0FBSixDQUFRLFNBQVIsRUFBbUJWLFFBQVFvQixNQUFSLENBQWVsQixLQUFLbUIsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLDZCQUFyQixDQUFmLENBQW5COztBQUdBYixJQUFJYyxHQUFKLENBQVEsU0FBUixFQUFtQmxCLFNBQVNtQixNQUE1QjtBQUNBZixJQUFJZ0IsSUFBSixDQUFTLFFBQVQsRUFBbUJwQixTQUFTcUIsS0FBNUI7QUFDQWpCLElBQUlnQixJQUFKLENBQVMsZ0JBQVQsRUFBMkJwQixTQUFTc0IsUUFBcEM7O0FBRUFsQixJQUFJbUIsTUFBSixDQUFXLElBQVg7QUFDQUMsUUFBUUMsR0FBUixDQUFZLDZCQUFaOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCdkIsR0FBakIiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbnZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG52YXIgaGFuZGxlcnMgPSByZXF1aXJlKCcuL2hhbmRsZXJzLmpzJyk7XG52YXIgc2Vzc2lvbiA9IHJlcXVpcmUoJ2V4cHJlc3Mtc2Vzc2lvbicpO1xubW9uZ29vc2UuUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG5cbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3Qvbm90ZWxpc3QnKTtcblxudmFyIGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShzZXNzaW9uKHtzZWNyZXQ6ICdzZWNyZXQnLCB1c2VybmFtZTogbnVsbCwgcGFzc3dvcmQ6IG51bGwsIHJlc2F2ZTogdHJ1ZSwgc2F2ZVVuaW5pdGlhbGl6ZWQ6IHRydWV9KSlcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpO1xuXG4vLyBhcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2NsaWVudCcpKSk7XG5hcHAudXNlKCcvJywgaGFuZGxlcnMuY2hlY2tTZXNzaW9uLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vY2xpZW50JykpKTtcbmFwcC51c2UoJy9saWInLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vbm9kZV9tb2R1bGVzJykpKTtcbmFwcC51c2UoJy9sb2dpbicsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9jbGllbnQvcGFnZXMvbG9naW4uaHRtbCcpKSlcbmFwcC51c2UoJy9zaWdudXAnLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vY2xpZW50L3BhZ2VzL3NpZ251cC5odG1sJykpKVxuXG5cbmFwcC5nZXQoJy9sb2dvdXQnLCBoYW5kbGVycy5sb2dvdXQpO1xuYXBwLnBvc3QoJy9sb2dpbicsIGhhbmRsZXJzLmxvZ2luKTtcbmFwcC5wb3N0KCcvbW92aWVzL3NlYXJjaCcsIGhhbmRsZXJzLmFkZE1vdmllKTtcblxuYXBwLmxpc3Rlbig4MDAwKTtcbmNvbnNvbGUubG9nKCdMaXN0ZW5pbmcgb24gMTI3LjAuMC4xOjgwMDAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcHA7Il19