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
      display: {
        img: 'http://cdn1-www.comingsoon.net/assets/uploads/2016/05/robinwilliams.jpg'
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
          console.log('Fetching movies: ', data);
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
      var _this3 = this;

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
          _this3.setState({
            match: data.matches[0] ? data.matches[0].username : '',
            display: data.movie
          });
        },
        error: function error(err) {
          console.log('Error querying for movie: ', err);
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
          React.createElement(Display, { info: this.state.display })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJtYXRjaCIsInByb2ZpbGUiLCJkaXNwbGF5IiwiaW1nIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1vdmllcyIsIm1hcCIsIm1vdmllIiwicGljdHVyZSIsImVycm9yIiwiZXJyIiwiX3ByZXZQcm9wcyIsInByZXZTdGF0ZSIsImRhdGFUeXBlIiwidmFsIiwibW92aWVUaXRsZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm5ld1RpdGxlcyIsInF1ZXJ5TW92aWUiLCJwdXNoIiwibWF0Y2hlcyIsInVzZXJuYW1lIiwic2V0VGl0bGVTdGF0ZSIsImJpbmQiLCJhZGRUaXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFERztBQUVYQyxhQUFPLEVBRkk7QUFHWEMsYUFBTyxFQUhJO0FBSVhDLGVBQVMseUZBSkU7QUFLWEMsZUFBUztBQUNQQyxhQUFLO0FBREU7QUFMRSxLQUFiO0FBRmlCO0FBV2xCOzs7O3lDQUNvQjtBQUFBOztBQUNuQjtBQUNBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxnQkFEQTtBQUVMQyxnQkFBUSxLQUZIO0FBR0xDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJDLGtCQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLElBQWpDO0FBQ0EsaUJBQUtHLFFBQUwsQ0FBYztBQUNaZCxvQkFBUVcsS0FBS0ksTUFBTCxDQUFZQyxHQUFaLENBQWdCLGlCQUFT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S0MsUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQXhGLEdBRkY7QUFHRSw4QkFBQyxLQUFELElBQU8sUUFBUSxLQUFLbkMsS0FBTCxDQUFXQyxNQUExQjtBQUhGLFNBSEY7QUFTRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFdBQVI7QUFDRSw4QkFBQyxPQUFELElBQVMsTUFBTSxLQUFLRCxLQUFMLENBQVdLLE9BQTFCO0FBREY7QUFURixPQURGO0FBZUQ7Ozs7RUEzR2VnQyxNQUFNQyxTOztBQThHeEJDLE9BQU96QyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlczogW10sXG4gICAgICB0aXRsZTogJycsXG4gICAgICBtYXRjaDogJycsXG4gICAgICBwcm9maWxlOiAnaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzU2NHgvOWEvMjYvODQvOWEyNjg0YzQyMTMxNzE0NzZlMTM3MzJhZjNiMjY1MzcuanBnJyxcbiAgICAgIGRpc3BsYXk6IHtcbiAgICAgICAgaW1nOiAnaHR0cDovL2NkbjEtd3d3LmNvbWluZ3Nvb24ubmV0L2Fzc2V0cy91cGxvYWRzLzIwMTYvMDUvcm9iaW53aWxsaWFtcy5qcGcnLFxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vIGZldGNoZXMgdXNlcidzIG1vdmllc1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvbW92aWVzL3NlYXJjaCcsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIG1vdmllczogJywgZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRpdGxlczogZGF0YS5tb3ZpZXMubWFwKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS50aXRsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcm9maWxlOiBkYXRhLnBpY3R1cmVcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgbW92aWVzOiAnLCBlcnIpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKF9wcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIC8vIHJlbmRlcnMgYSBtYXRjaCBvbnRvIHRoZSBwYWdlXG4gICAgaWYgKHByZXZTdGF0ZS5tYXRjaCAhPT0gdGhpcy5zdGF0ZS5tYXRjaCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tYXRjaCk7XG4gICAgICB2YXIgbWF0Y2ggPSB0aGlzLnN0YXRlLm1hdGNoO1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL3VzZXJzJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBtYXRjaDogbWF0Y2hcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTWF0Y2ggZGF0YTogJywgZGF0YSk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igc2VhcmNoaW5nIGZvciBtYXRjaDogJywgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgc2V0VGl0bGVTdGF0ZSh2YWwpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt0aXRsZTogdmFsfSk7XG4gIH1cbiAgYWRkVGl0bGUoKSB7XG4gICAgLy8gYWRkcyB0aXRsZSB0byB0aGUgbGlzdCBhbmQgY2hlY2tzIGZvciBtYXRjaGVzXG4gICAgdmFyIG1vdmllVGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUudGl0bGVzLmluZGV4T2YobW92aWVUaXRsZSkgPT09IC0xKSB7XG4gICAgICB2YXIgbmV3VGl0bGVzID0gdGhpcy5zdGF0ZS50aXRsZXM7XG4gICAgICB0aGlzLnF1ZXJ5TW92aWUobW92aWVUaXRsZSk7XG4gICAgICBuZXdUaXRsZXMucHVzaChtb3ZpZVRpdGxlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0aXRsZXM6IG5ld1RpdGxlcyxcbiAgICAgICAgdGl0bGU6ICcnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBxdWVyeU1vdmllKG1vdmllVGl0bGUpIHtcbiAgICAvLyBhZGQgbW92aWUgdG8gZGF0YWJhc2UgYW5kIGNoZWNrcyBmb3IgbWF0Y2hlc1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvbW92aWVzL3NlYXJjaCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1vdmllOiBtb3ZpZVRpdGxlXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ01vdmllOiAnLCBkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWF0Y2g6IGRhdGEubWF0Y2hlc1swXSA/IGRhdGEubWF0Y2hlc1swXS51c2VybmFtZSA6ICcnLFxuICAgICAgICAgIGRpc3BsYXk6IGRhdGEubW92aWVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHF1ZXJ5aW5nIGZvciBtb3ZpZTogJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaWQ9J2xvZ291dCcgaHJlZj0nL2xvZ291dCc+TG9nb3V0PC9hPlxuICAgICAgICA8aW1nIGlkPSdwcm9maWxlJyBzcmM9e3RoaXMuc3RhdGUucHJvZmlsZX0gLz5cbiAgICAgICAgPGRpdiBpZD0nbW92aWVMaXN0Jz5cbiAgICAgICAgICA8aDQ+RW50ZXIgYSBtb3ZpZSB0aXRsZTo8L2g0PlxuICAgICAgICAgIDxJbnB1dCB0ZXh0PXt0aGlzLnN0YXRlLnRpdGxlfSB0aXRsZUNoYW5nZT17dGhpcy5zZXRUaXRsZVN0YXRlLmJpbmQodGhpcyl9IGFkZFRvVGl0bGVzPXt0aGlzLmFkZFRpdGxlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8VGFibGUgdGl0bGVzPXt0aGlzLnN0YXRlLnRpdGxlc30vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPSdtb3ZpZUluZm8nPlxuICAgICAgICAgIDxEaXNwbGF5IGluZm89e3RoaXMuc3RhdGUuZGlzcGxheX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==