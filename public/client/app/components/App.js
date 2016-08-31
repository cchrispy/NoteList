'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      titles: [],
      title: '',
      match: '',
      profile: 'https://s-media-cache-ak0.pinimg.com/564x/9a/26/84/9a2684c4213171476e13732af3b26537.jpg',
      display: {},
      img: 'https://www.offerpop.com/wp-content/uploads/2014/08/Movies.jpg',
      userMatch: {
        show: false,
        name: '',
        image: ''
      }
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      // fetches user's movies
      $.ajax({
        url: '/movies/search',
        method: 'GET',
        success: function success(data) {
          console.log('Fetching movies: ', data.movies);
          _this2.setState({
            titles: data.movies.map(function (movie) {
              return movie.title;
            }),
            profile: data.picture
          });
        },
        error: function error(err) {
          console.log('Error fetching movies: ', err);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_prevProps, prevState) {
      var _this3 = this;

      // renders a match onto the page
      if (prevState.match !== this.state.match) {
        console.log(this.state.match);
        var match = this.state.match;
        $.ajax({
          url: '/users',
          method: 'POST',
          dataType: 'json',
          data: {
            match: match
          },
          success: function success(data) {
            console.log('Match data: ', data);
            _this3.setState({
              userMatch: {
                show: true,
                name: data.username,
                image: data.picture
              }
            });
          },
          error: function error(err) {
            console.log('Error searching for match: ', err);
          }
        });
      }
    }
  }, {
    key: 'setTitleState',
    value: function setTitleState(val) {
      this.setState({ title: val });
    }
  }, {
    key: 'addTitle',
    value: function addTitle() {
      // adds title to the list and checks for matches
      var movieTitle = this.state.title.toLowerCase();
      if (this.state.titles.indexOf(movieTitle) === -1) {
        var newTitles = this.state.titles;
        this.queryMovie(movieTitle);
        newTitles.push(movieTitle);
        this.setState({
          titles: newTitles,
          title: ''
        });
      }
    }
  }, {
    key: 'queryMovie',
    value: function queryMovie(movieTitle) {
      var _this4 = this;

      // add movie to database and checks for matches
      $.ajax({
        url: '/movies/search',
        method: 'POST',
        dataType: 'json',
        data: {
          movie: movieTitle
        },
        success: function success(data) {
          console.log('Movie: ', data);

          _this4.setState({
            match: data.matches[0] ? data.matches[0].username : '',
            display: data.movie,
            img: tempImages[Math.floor(Math.random() * tempImages.length)]
          });
        },
        error: function error(err) {
          console.log('Error querying for movie: ', err);
        }
      });
    }
  }, {
    key: 'toggleMatch',
    value: function toggleMatch() {
      this.setState({
        userMatch: {
          show: false
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'a',
          { id: 'logout', href: '/logout' },
          'Logout'
        ),
        React.createElement('img', { id: 'profile', src: this.state.profile }),
        React.createElement(
          'div',
          { id: 'movieList' },
          React.createElement(
            'h4',
            null,
            'Enter a movie title:'
          ),
          React.createElement(Input, { text: this.state.title, titleChange: this.setTitleState.bind(this), addToTitles: this.addTitle.bind(this) }),
          React.createElement(Table, { titles: this.state.titles })
        ),
        React.createElement(
          'div',
          { id: 'movieInfo' },
          React.createElement(Display, { info: this.state.img })
        ),
        React.createElement(
          'div',
          { id: 'matchBox' },
          this.state.userMatch.show ? React.createElement(Match, { details: this.state.userMatch, toggle: this.toggleMatch.bind(this) }) : null
        )
      );
    }
  }]);

  return App;
}(React.Component);

var tempImages = ['https://s-media-cache-ak0.pinimg.com/736x/34/5a/0d/345a0d25e5968310a091adbe5955263a.jpg', 'http://www.hollywoodreporter.com/sites/default/files/custom/Blog_Images/avengers-movie-poster-1.jpg', 'http://www.impawards.com/2010/posters/inception_ver3.jpg', 'http://www.wbaltv.com/image/view/-/165568/highRes/2/-/i2c4at/-/Harry-Potter-Sorcerer-s-Stone-poster-jpg.jpg', 'https://www.movieposter.com/posters/archive/main/32/MPW-16415', 'http://www.welcomeamerica.com/wp-content/uploads/2016/04/nemo.jpg', 'http://cdn1-www.comingsoon.net/assets/uploads/2016/05/robinwilliams.jpg', 'http://contentmarketinginstitute.com/wp-content/uploads/2015/08/original-jaws-poster-image-1A.png', 'http://graphicdesignjunction.com/wp-content/uploads/2012/10/movie+posters+16.jpg', 'https://speckycdn-sdm.netdna-ssl.com/wp-content/uploads/2009/08/movieposter29.jpg'];

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJtYXRjaCIsInByb2ZpbGUiLCJkaXNwbGF5IiwiaW1nIiwidXNlck1hdGNoIiwic2hvdyIsIm5hbWUiLCJpbWFnZSIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibW92aWVzIiwic2V0U3RhdGUiLCJtYXAiLCJtb3ZpZSIsInBpY3R1cmUiLCJlcnJvciIsImVyciIsIl9wcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJkYXRhVHlwZSIsInVzZXJuYW1lIiwidmFsIiwibW92aWVUaXRsZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm5ld1RpdGxlcyIsInF1ZXJ5TW92aWUiLCJwdXNoIiwibWF0Y2hlcyIsInRlbXBJbWFnZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzZXRUaXRsZVN0YXRlIiwiYmluZCIsImFkZFRpdGxlIiwidG9nZ2xlTWF0Y2giLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBREc7QUFFWEMsYUFBTyxFQUZJO0FBR1hDLGFBQU8sRUFISTtBQUlYQyxlQUFTLHlGQUpFO0FBS1hDLGVBQVMsRUFMRTtBQU1YQyxXQUFLLGdFQU5NO0FBT1hDLGlCQUFXO0FBQ1RDLGNBQU0sS0FERztBQUVUQyxjQUFNLEVBRkc7QUFHVEMsZUFBTztBQUhFO0FBUEEsS0FBYjtBQUZpQjtBQWVsQjs7Ozt5Q0FDb0I7QUFBQTs7QUFDbkI7QUFDQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssZ0JB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cUdBRmlCLEVBR2pCLDBEQUhpQixFQUlqQiw2R0FKaUIsRUFLakIsK0RBTGlCLEVBTWpCLG1FQU5pQixFQU9qQix5RUFQaUIsRUFRakIsbUdBUmlCLEVBU2pCLGtGQVRpQixFQVVqQixtRkFWaUIsQ0FBakI7O0FBYUFXLE9BQU9uRCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlczogW10sXG4gICAgICB0aXRsZTogJycsXG4gICAgICBtYXRjaDogJycsXG4gICAgICBwcm9maWxlOiAnaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzU2NHgvOWEvMjYvODQvOWEyNjg0YzQyMTMxNzE0NzZlMTM3MzJhZjNiMjY1MzcuanBnJyxcbiAgICAgIGRpc3BsYXk6IHt9LFxuICAgICAgaW1nOiAnaHR0cHM6Ly93d3cub2ZmZXJwb3AuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA4L01vdmllcy5qcGcnLFxuICAgICAgdXNlck1hdGNoOiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgaW1hZ2U6ICcnXG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gZmV0Y2hlcyB1c2VyJ3MgbW92aWVzXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9tb3ZpZXMvc2VhcmNoJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgbW92aWVzOiAnLCBkYXRhLm1vdmllcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRpdGxlczogZGF0YS5tb3ZpZXMubWFwKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS50aXRsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcm9maWxlOiBkYXRhLnBpY3R1cmVcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgbW92aWVzOiAnLCBlcnIpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKF9wcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIC8vIHJlbmRlcnMgYSBtYXRjaCBvbnRvIHRoZSBwYWdlXG4gICAgaWYgKHByZXZTdGF0ZS5tYXRjaCAhPT0gdGhpcy5zdGF0ZS5tYXRjaCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tYXRjaCk7XG4gICAgICB2YXIgbWF0Y2ggPSB0aGlzLnN0YXRlLm1hdGNoO1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL3VzZXJzJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBtYXRjaDogbWF0Y2hcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTWF0Y2ggZGF0YTogJywgZGF0YSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB1c2VyTWF0Y2g6IHtcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgbmFtZTogZGF0YS51c2VybmFtZSxcbiAgICAgICAgICAgICAgaW1hZ2U6IGRhdGEucGljdHVyZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHNlYXJjaGluZyBmb3IgbWF0Y2g6ICcsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHNldFRpdGxlU3RhdGUodmFsKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGl0bGU6IHZhbH0pO1xuICB9XG4gIGFkZFRpdGxlKCkge1xuICAgIC8vIGFkZHMgdGl0bGUgdG8gdGhlIGxpc3QgYW5kIGNoZWNrcyBmb3IgbWF0Y2hlc1xuICAgIHZhciBtb3ZpZVRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh0aGlzLnN0YXRlLnRpdGxlcy5pbmRleE9mKG1vdmllVGl0bGUpID09PSAtMSkge1xuICAgICAgdmFyIG5ld1RpdGxlcyA9IHRoaXMuc3RhdGUudGl0bGVzO1xuICAgICAgdGhpcy5xdWVyeU1vdmllKG1vdmllVGl0bGUpO1xuICAgICAgbmV3VGl0bGVzLnB1c2gobW92aWVUaXRsZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGl0bGVzOiBuZXdUaXRsZXMsXG4gICAgICAgIHRpdGxlOiAnJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcXVlcnlNb3ZpZShtb3ZpZVRpdGxlKSB7XG4gICAgLy8gYWRkIG1vdmllIHRvIGRhdGFiYXNlIGFuZCBjaGVja3MgZm9yIG1hdGNoZXNcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL21vdmllcy9zZWFyY2gnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICBtb3ZpZTogbW92aWVUaXRsZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNb3ZpZTogJywgZGF0YSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWF0Y2g6IGRhdGEubWF0Y2hlc1swXSA/IGRhdGEubWF0Y2hlc1swXS51c2VybmFtZSA6ICcnLFxuICAgICAgICAgIGRpc3BsYXk6IGRhdGEubW92aWUsXG4gICAgICAgICAgaW1nOiB0ZW1wSW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBJbWFnZXMubGVuZ3RoKV1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHF1ZXJ5aW5nIGZvciBtb3ZpZTogJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHRvZ2dsZU1hdGNoKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlck1hdGNoOiB7XG4gICAgICAgIHNob3c6IGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxhIGlkPSdsb2dvdXQnIGhyZWY9Jy9sb2dvdXQnPkxvZ291dDwvYT5cbiAgICAgICAgPGltZyBpZD0ncHJvZmlsZScgc3JjPXt0aGlzLnN0YXRlLnByb2ZpbGV9IC8+XG4gICAgICAgIDxkaXYgaWQ9J21vdmllTGlzdCc+XG4gICAgICAgICAgPGg0PkVudGVyIGEgbW92aWUgdGl0bGU6PC9oND5cbiAgICAgICAgICA8SW5wdXQgdGV4dD17dGhpcy5zdGF0ZS50aXRsZX0gdGl0bGVDaGFuZ2U9e3RoaXMuc2V0VGl0bGVTdGF0ZS5iaW5kKHRoaXMpfSBhZGRUb1RpdGxlcz17dGhpcy5hZGRUaXRsZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPFRhYmxlIHRpdGxlcz17dGhpcy5zdGF0ZS50aXRsZXN9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD0nbW92aWVJbmZvJz5cbiAgICAgICAgICA8RGlzcGxheSBpbmZvPXt0aGlzLnN0YXRlLmltZ30vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPSdtYXRjaEJveCc+XG4gICAgICAgICAge3RoaXMuc3RhdGUudXNlck1hdGNoLnNob3cgPyA8TWF0Y2ggZGV0YWlscz17dGhpcy5zdGF0ZS51c2VyTWF0Y2h9IHRvZ2dsZT17dGhpcy50b2dnbGVNYXRjaC5iaW5kKHRoaXMpfS8+IDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxudmFyIHRlbXBJbWFnZXMgPSBbXG4naHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzczNngvMzQvNWEvMGQvMzQ1YTBkMjVlNTk2ODMxMGEwOTFhZGJlNTk1NTI2M2EuanBnJyxcbidodHRwOi8vd3d3LmhvbGx5d29vZHJlcG9ydGVyLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL2N1c3RvbS9CbG9nX0ltYWdlcy9hdmVuZ2Vycy1tb3ZpZS1wb3N0ZXItMS5qcGcnLFxuJ2h0dHA6Ly93d3cuaW1wYXdhcmRzLmNvbS8yMDEwL3Bvc3RlcnMvaW5jZXB0aW9uX3ZlcjMuanBnJyxcbidodHRwOi8vd3d3LndiYWx0di5jb20vaW1hZ2Uvdmlldy8tLzE2NTU2OC9oaWdoUmVzLzIvLS9pMmM0YXQvLS9IYXJyeS1Qb3R0ZXItU29yY2VyZXItcy1TdG9uZS1wb3N0ZXItanBnLmpwZycsXG4naHR0cHM6Ly93d3cubW92aWVwb3N0ZXIuY29tL3Bvc3RlcnMvYXJjaGl2ZS9tYWluLzMyL01QVy0xNjQxNScsXG4naHR0cDovL3d3dy53ZWxjb21lYW1lcmljYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDQvbmVtby5qcGcnLFxuJ2h0dHA6Ly9jZG4xLXd3dy5jb21pbmdzb29uLm5ldC9hc3NldHMvdXBsb2Fkcy8yMDE2LzA1L3JvYmlud2lsbGlhbXMuanBnJyxcbidodHRwOi8vY29udGVudG1hcmtldGluZ2luc3RpdHV0ZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDgvb3JpZ2luYWwtamF3cy1wb3N0ZXItaW1hZ2UtMUEucG5nJyxcbidodHRwOi8vZ3JhcGhpY2Rlc2lnbmp1bmN0aW9uLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxMi8xMC9tb3ZpZStwb3N0ZXJzKzE2LmpwZycsXG4naHR0cHM6Ly9zcGVja3ljZG4tc2RtLm5ldGRuYS1zc2wuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDA5LzA4L21vdmllcG9zdGVyMjkuanBnJ1xuXVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==