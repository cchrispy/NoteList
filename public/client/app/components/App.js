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
    key: 'sendMessage',
    value: function sendMessage() {
      prompt('Enter a message: ');
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
          this.state.userMatch.show ? React.createElement(Match, { details: this.state.userMatch, toggle: this.toggleMatch.bind(this), message: this.sendMessage.bind(this) }) : null
        )
      );
    }
  }]);

  return App;
}(React.Component);

var tempImages = ['https://s-media-cache-ak0.pinimg.com/736x/34/5a/0d/345a0d25e5968310a091adbe5955263a.jpg', 'http://www.hollywoodreporter.com/sites/default/files/custom/Blog_Images/avengers-movie-poster-1.jpg', 'http://www.impawards.com/2010/posters/inception_ver3.jpg', 'http://www.wbaltv.com/image/view/-/165568/highRes/2/-/i2c4at/-/Harry-Potter-Sorcerer-s-Stone-poster-jpg.jpg', 'https://www.movieposter.com/posters/archive/main/32/MPW-16415', 'http://www.welcomeamerica.com/wp-content/uploads/2016/04/nemo.jpg', 'http://cdn1-www.comingsoon.net/assets/uploads/2016/05/robinwilliams.jpg', 'http://contentmarketinginstitute.com/wp-content/uploads/2015/08/original-jaws-poster-image-1A.png', 'http://graphicdesignjunction.com/wp-content/uploads/2012/10/movie+posters+16.jpg', 'https://speckycdn-sdm.netdna-ssl.com/wp-content/uploads/2009/08/movieposter29.jpg'];

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJtYXRjaCIsInByb2ZpbGUiLCJkaXNwbGF5IiwiaW1nIiwidXNlck1hdGNoIiwic2hvdyIsIm5hbWUiLCJpbWFnZSIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibW92aWVzIiwic2V0U3RhdGUiLCJtYXAiLCJtb3ZpZSIsInBpY3R1cmUiLCJlcnJvciIsImVyciIsIl9wcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJkYXRhVHlwZSIsInVzZXJuYW1lIiwidmFsIiwibW92aWVUaXRsZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm5ld1RpdGxlcyIsInF1ZXJ5TW92aWUiLCJwdXNoIiwibWF0Y2hlcyIsInRlbXBJbWFnZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJwcm9tcHQiLCJzZXRUaXRsZVN0YXRlIiwiYmluZCIsImFkZFRpdGxlIiwidG9nZ2xlTWF0Y2giLCJzZW5kTWVzc2FnZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFERztBQUVYQyxhQUFPLEVBRkk7QUFHWEMsYUFBTyxFQUhJO0FBSVhDLGVBQVMseUZBSkU7QUFLWEMsZUFBUyxFQUxFO0FBTVhDLFdBQUssZ0VBTk07QUFPWEMsaUJBQVc7QUFDVEMsY0FBTSxLQURHO0FBRVRDLGNBQU0sRUFGRztBQUdUQyxlQUFPO0FBSEU7QUFQQSxLQUFiO0FBRmlCO0FBZWxCOzs7O3lDQUNvQjtBQUFBOztBQUNuQjtBQUNBQyxRQUFFQyxJ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Q0FBc0IsSUFBdEIsQ0FBcEYsR0FBNUIsR0FBaUo7QUFEcEo7QUFiRixPQURGO0FBbUJEOzs7O0VBckllSSxNQUFNQyxTOztBQXdJeEIsSUFBSVosYUFBYSxDQUNqQix5RkFEaUIsRUFFakIscUdBRmlCLEVBR2pCLDBEQUhpQixFQUlqQiw2R0FKaUIsRUFLakIsK0RBTGlCLEVBTWpCLG1FQU5pQixFQU9qQix5RUFQaUIsRUFRakIsbUdBUmlCLEVBU2pCLGtGQVRpQixFQVVqQixtRkFWaUIsQ0FBakI7O0FBYUFhLE9BQU9yRCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlczogW10sXG4gICAgICB0aXRsZTogJycsXG4gICAgICBtYXRjaDogJycsXG4gICAgICBwcm9maWxlOiAnaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzU2NHgvOWEvMjYvODQvOWEyNjg0YzQyMTMxNzE0NzZlMTM3MzJhZjNiMjY1MzcuanBnJyxcbiAgICAgIGRpc3BsYXk6IHt9LFxuICAgICAgaW1nOiAnaHR0cHM6Ly93d3cub2ZmZXJwb3AuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA4L01vdmllcy5qcGcnLFxuICAgICAgdXNlck1hdGNoOiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgaW1hZ2U6ICcnXG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gZmV0Y2hlcyB1c2VyJ3MgbW92aWVzXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9tb3ZpZXMvc2VhcmNoJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgbW92aWVzOiAnLCBkYXRhLm1vdmllcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRpdGxlczogZGF0YS5tb3ZpZXMubWFwKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS50aXRsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcm9maWxlOiBkYXRhLnBpY3R1cmVcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgbW92aWVzOiAnLCBlcnIpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKF9wcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIC8vIHJlbmRlcnMgYSBtYXRjaCBvbnRvIHRoZSBwYWdlXG4gICAgaWYgKHByZXZTdGF0ZS5tYXRjaCAhPT0gdGhpcy5zdGF0ZS5tYXRjaCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tYXRjaCk7XG4gICAgICB2YXIgbWF0Y2ggPSB0aGlzLnN0YXRlLm1hdGNoO1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL3VzZXJzJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBtYXRjaDogbWF0Y2hcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTWF0Y2ggZGF0YTogJywgZGF0YSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB1c2VyTWF0Y2g6IHtcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgbmFtZTogZGF0YS51c2VybmFtZSxcbiAgICAgICAgICAgICAgaW1hZ2U6IGRhdGEucGljdHVyZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHNlYXJjaGluZyBmb3IgbWF0Y2g6ICcsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHNldFRpdGxlU3RhdGUodmFsKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGl0bGU6IHZhbH0pO1xuICB9XG4gIGFkZFRpdGxlKCkge1xuICAgIC8vIGFkZHMgdGl0bGUgdG8gdGhlIGxpc3QgYW5kIGNoZWNrcyBmb3IgbWF0Y2hlc1xuICAgIHZhciBtb3ZpZVRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh0aGlzLnN0YXRlLnRpdGxlcy5pbmRleE9mKG1vdmllVGl0bGUpID09PSAtMSkge1xuICAgICAgdmFyIG5ld1RpdGxlcyA9IHRoaXMuc3RhdGUudGl0bGVzO1xuICAgICAgdGhpcy5xdWVyeU1vdmllKG1vdmllVGl0bGUpO1xuICAgICAgbmV3VGl0bGVzLnB1c2gobW92aWVUaXRsZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGl0bGVzOiBuZXdUaXRsZXMsXG4gICAgICAgIHRpdGxlOiAnJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcXVlcnlNb3ZpZShtb3ZpZVRpdGxlKSB7XG4gICAgLy8gYWRkIG1vdmllIHRvIGRhdGFiYXNlIGFuZCBjaGVja3MgZm9yIG1hdGNoZXNcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL21vdmllcy9zZWFyY2gnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICBtb3ZpZTogbW92aWVUaXRsZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNb3ZpZTogJywgZGF0YSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWF0Y2g6IGRhdGEubWF0Y2hlc1swXSA/IGRhdGEubWF0Y2hlc1swXS51c2VybmFtZSA6ICcnLFxuICAgICAgICAgIGRpc3BsYXk6IGRhdGEubW92aWUsXG4gICAgICAgICAgaW1nOiB0ZW1wSW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlbXBJbWFnZXMubGVuZ3RoKV1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHF1ZXJ5aW5nIGZvciBtb3ZpZTogJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHRvZ2dsZU1hdGNoKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlck1hdGNoOiB7XG4gICAgICAgIHNob3c6IGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBzZW5kTWVzc2FnZSgpIHtcbiAgICBwcm9tcHQoJ0VudGVyIGEgbWVzc2FnZTogJyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YSBpZD0nbG9nb3V0JyBocmVmPScvbG9nb3V0Jz5Mb2dvdXQ8L2E+XG4gICAgICAgIDxpbWcgaWQ9J3Byb2ZpbGUnIHNyYz17dGhpcy5zdGF0ZS5wcm9maWxlfSAvPlxuICAgICAgICA8ZGl2IGlkPSdtb3ZpZUxpc3QnPlxuICAgICAgICAgIDxoND5FbnRlciBhIG1vdmllIHRpdGxlOjwvaDQ+XG4gICAgICAgICAgPElucHV0IHRleHQ9e3RoaXMuc3RhdGUudGl0bGV9IHRpdGxlQ2hhbmdlPXt0aGlzLnNldFRpdGxlU3RhdGUuYmluZCh0aGlzKX0gYWRkVG9UaXRsZXM9e3RoaXMuYWRkVGl0bGUuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDxUYWJsZSB0aXRsZXM9e3RoaXMuc3RhdGUudGl0bGVzfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9J21vdmllSW5mbyc+XG4gICAgICAgICAgPERpc3BsYXkgaW5mbz17dGhpcy5zdGF0ZS5pbWd9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD0nbWF0Y2hCb3gnPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnVzZXJNYXRjaC5zaG93ID8gPE1hdGNoIGRldGFpbHM9e3RoaXMuc3RhdGUudXNlck1hdGNofSB0b2dnbGU9e3RoaXMudG9nZ2xlTWF0Y2guYmluZCh0aGlzKX0gbWVzc2FnZT17dGhpcy5zZW5kTWVzc2FnZS5iaW5kKHRoaXMpfS8+IDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxudmFyIHRlbXBJbWFnZXMgPSBbXG4naHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzczNngvMzQvNWEvMGQvMzQ1YTBkMjVlNTk2ODMxMGEwOTFhZGJlNTk1NTI2M2EuanBnJyxcbidodHRwOi8vd3d3LmhvbGx5d29vZHJlcG9ydGVyLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL2N1c3RvbS9CbG9nX0ltYWdlcy9hdmVuZ2Vycy1tb3ZpZS1wb3N0ZXItMS5qcGcnLFxuJ2h0dHA6Ly93d3cuaW1wYXdhcmRzLmNvbS8yMDEwL3Bvc3RlcnMvaW5jZXB0aW9uX3ZlcjMuanBnJyxcbidodHRwOi8vd3d3LndiYWx0di5jb20vaW1hZ2Uvdmlldy8tLzE2NTU2OC9oaWdoUmVzLzIvLS9pMmM0YXQvLS9IYXJyeS1Qb3R0ZXItU29yY2VyZXItcy1TdG9uZS1wb3N0ZXItanBnLmpwZycsXG4naHR0cHM6Ly93d3cubW92aWVwb3N0ZXIuY29tL3Bvc3RlcnMvYXJjaGl2ZS9tYWluLzMyL01QVy0xNjQxNScsXG4naHR0cDovL3d3dy53ZWxjb21lYW1lcmljYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDQvbmVtby5qcGcnLFxuJ2h0dHA6Ly9jZG4xLXd3dy5jb21pbmdzb29uLm5ldC9hc3NldHMvdXBsb2Fkcy8yMDE2LzA1L3JvYmlud2lsbGlhbXMuanBnJyxcbidodHRwOi8vY29udGVudG1hcmtldGluZ2luc3RpdHV0ZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDgvb3JpZ2luYWwtamF3cy1wb3N0ZXItaW1hZ2UtMUEucG5nJyxcbidodHRwOi8vZ3JhcGhpY2Rlc2lnbmp1bmN0aW9uLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxMi8xMC9tb3ZpZStwb3N0ZXJzKzE2LmpwZycsXG4naHR0cHM6Ly9zcGVja3ljZG4tc2RtLm5ldGRuYS1zc2wuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDA5LzA4L21vdmllcG9zdGVyMjkuanBnJ1xuXVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==