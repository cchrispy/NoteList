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

      // add movie to database
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
            match: data.matches[0].username || '',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJtYXRjaCIsInByb2ZpbGUiLCJkaXNwbGF5IiwiaW1nIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtb3ZpZXMiLCJzZXRTdGF0ZSIsIm1hcCIsIm1vdmllIiwicGljdHVyZSIsImVycm9yIiwiZXJyIiwiX3ByZXZQcm9wcyIsInByZXZTdGF0ZSIsImRhdGFUeXBlIiwidmFsIiwibW92aWVUaXRsZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm5ld1RpdGxlcyIsInF1ZXJ5TW92aWUiLCJwdXNoIiwibWF0Y2hlcyIsInVzZXJuYW1lIiwic2V0VGl0bGVTdGF0ZSIsImJpbmQiLCJhZGRUaXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFERztBQUVYQyxhQUFPLEVBRkk7QUFHWEMsYUFBTyxFQUhJO0FBSVhDLGVBQVMseUZBSkU7QUFLWEMsZUFBUztBQUNQQyxhQUFLO0FBREU7QUFMRSxLQUFiO0FBRmlCO0FBV2xCOzs7O3lDQUNvQjtBQUFBOztBQUNuQjtBQUNBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxnQkFEQTtBQUVMQyxnQkFBUSxLQUZIO0FBR0xDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJDLGtCQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLEtBQUtHLE1BQXRDO0FBQ0EsaUJBQUtDLFFBQUwsQ0FBYztBQUNaZixvQkFBUVcsS0FBS0csTUFBTCxDQUFZRSxHQUFaLENBQWdC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LElBQW5CLENBQXhGLEdBRkY7QUFHRSw4QkFBQyxLQUFELElBQU8sUUFBUSxLQUFLbkMsS0FBTCxDQUFXQyxNQUExQjtBQUhGLFNBSEY7QUFTRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFdBQVI7QUFDRSw4QkFBQyxPQUFELElBQVMsTUFBTSxLQUFLRCxLQUFMLENBQVdLLE9BQTFCO0FBREY7QUFURixPQURGO0FBZUQ7Ozs7RUEzR2VnQyxNQUFNQyxTOztBQThHeEJDLE9BQU96QyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlczogW10sXG4gICAgICB0aXRsZTogJycsXG4gICAgICBtYXRjaDogJycsXG4gICAgICBwcm9maWxlOiAnaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzU2NHgvOWEvMjYvODQvOWEyNjg0YzQyMTMxNzE0NzZlMTM3MzJhZjNiMjY1MzcuanBnJyxcbiAgICAgIGRpc3BsYXk6IHtcbiAgICAgICAgaW1nOiAnaHR0cDovL2NkbjEtd3d3LmNvbWluZ3Nvb24ubmV0L2Fzc2V0cy91cGxvYWRzLzIwMTYvMDUvcm9iaW53aWxsaWFtcy5qcGcnLFxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vIGZldGNoZXMgdXNlcidzIG1vdmllc1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvbW92aWVzL3NlYXJjaCcsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIG1vdmllczogJywgZGF0YS5tb3ZpZXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0aXRsZXM6IGRhdGEubW92aWVzLm1hcChtb3ZpZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW92aWUudGl0bGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJvZmlsZTogZGF0YS5waWN0dXJlXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZldGNoaW5nIG1vdmllczogJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShfcHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAvLyByZW5kZXJzIGEgbWF0Y2ggb250byB0aGUgcGFnZVxuICAgIGlmIChwcmV2U3RhdGUubWF0Y2ggIT09IHRoaXMuc3RhdGUubWF0Y2gpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubWF0Y2gpO1xuICAgICAgdmFyIG1hdGNoID0gdGhpcy5zdGF0ZS5tYXRjaDtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy91c2VycycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbWF0Y2g6IG1hdGNoXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ01hdGNoIGRhdGE6ICcsIGRhdGEpO1xuXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHNlYXJjaGluZyBmb3IgbWF0Y2g6ICcsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHNldFRpdGxlU3RhdGUodmFsKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGl0bGU6IHZhbH0pO1xuICB9XG4gIGFkZFRpdGxlKCkge1xuICAgIC8vIGFkZHMgdGl0bGUgdG8gdGhlIGxpc3QgYW5kIGNoZWNrcyBmb3IgbWF0Y2hlc1xuICAgIHZhciBtb3ZpZVRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh0aGlzLnN0YXRlLnRpdGxlcy5pbmRleE9mKG1vdmllVGl0bGUpID09PSAtMSkge1xuICAgICAgdmFyIG5ld1RpdGxlcyA9IHRoaXMuc3RhdGUudGl0bGVzO1xuICAgICAgdGhpcy5xdWVyeU1vdmllKG1vdmllVGl0bGUpO1xuICAgICAgbmV3VGl0bGVzLnB1c2gobW92aWVUaXRsZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGl0bGVzOiBuZXdUaXRsZXMsXG4gICAgICAgIHRpdGxlOiAnJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcXVlcnlNb3ZpZShtb3ZpZVRpdGxlKSB7XG4gICAgLy8gYWRkIG1vdmllIHRvIGRhdGFiYXNlXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9tb3ZpZXMvc2VhcmNoJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbW92aWU6IG1vdmllVGl0bGVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnTW92aWU6ICcsIGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtYXRjaDogZGF0YS5tYXRjaGVzWzBdLnVzZXJuYW1lIHx8ICcnLFxuICAgICAgICAgIGRpc3BsYXk6IGRhdGEubW92aWVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHF1ZXJ5aW5nIGZvciBtb3ZpZTogJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaWQ9J2xvZ291dCcgaHJlZj0nL2xvZ291dCc+TG9nb3V0PC9hPlxuICAgICAgICA8aW1nIGlkPSdwcm9maWxlJyBzcmM9e3RoaXMuc3RhdGUucHJvZmlsZX0gLz5cbiAgICAgICAgPGRpdiBpZD0nbW92aWVMaXN0Jz5cbiAgICAgICAgICA8aDQ+RW50ZXIgYSBtb3ZpZSB0aXRsZTo8L2g0PlxuICAgICAgICAgIDxJbnB1dCB0ZXh0PXt0aGlzLnN0YXRlLnRpdGxlfSB0aXRsZUNoYW5nZT17dGhpcy5zZXRUaXRsZVN0YXRlLmJpbmQodGhpcyl9IGFkZFRvVGl0bGVzPXt0aGlzLmFkZFRpdGxlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8VGFibGUgdGl0bGVzPXt0aGlzLnN0YXRlLnRpdGxlc30vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPSdtb3ZpZUluZm8nPlxuICAgICAgICAgIDxEaXNwbGF5IGluZm89e3RoaXMuc3RhdGUuZGlzcGxheX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==