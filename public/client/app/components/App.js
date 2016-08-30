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
      },
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
            display: data.movie
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
          React.createElement(Display, { info: this.state.display })
        ),
        React.createElement(
          'div',
          null,
          this.state.userMatch.show ? React.createElement(Match, { details: this.state.userMatch, toggle: this.toggleMatch.bind(this) }) : null
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJtYXRjaCIsInByb2ZpbGUiLCJkaXNwbGF5IiwiaW1nIiwidXNlck1hdGNoIiwic2hvdyIsIm5hbWUiLCJpbWFnZSIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibW92aWVzIiwic2V0U3RhdGUiLCJtYXAiLCJtb3ZpZSIsInBpY3R1cmUiLCJlcnJvciIsImVyciIsIl9wcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJkYXRhVHlwZSIsInVzZXJuYW1lIiwidmFsIiwibW92aWVUaXRsZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm5ld1RpdGxlcyIsInF1ZXJ5TW92aWUiLCJwdXNoIiwibWF0Y2hlcyIsInNldFRpdGxlU3RhdGUiLCJiaW5kIiwiYWRkVGl0bGUiLCJ0b2dnbGVNYXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFERztBQUVYQyxhQUFPLEVBRkk7QUFHWEMsYUFBTyxFQUhJO0FBSVhDLGVBQVMseUZBSkU7QUFLWEMsZUFBUztBQUNQQyxhQUFLO0FBREUsT0FMRTtBQVFYQyxpQkFBVztBQUNUQyxjQUFNLEtBREc7QUFFVEMsY0FBTSxFQUZHO0FBR1RDLGVBQU87QUFIRTtBQVJBLEtBQWI7QUFGaUI7QUFnQmxCOzs7O3lDQUNvQjtBQUFBOztBQUNuQjtBQUNBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxnQkFEQTtBQUVMQyxnQkFBUSxLQUZIO0FBR0xDLGlCQUFTLGlCQUFDQyxJQUFELEVB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QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLElBQUcsUUFBTixFQUFlLE1BQUssU0FBcEI7QUFBQTtBQUFBLFNBREY7QUFFRSxxQ0FBSyxJQUFHLFNBQVIsRUFBa0IsS0FBSyxLQUFLUixLQUFMLENBQVdJLE9BQWxDLEdBRkY7QUFHRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFdBQVI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSw4QkFBQyxLQUFELElBQU8sTUFBTSxLQUFLSixLQUFMLENBQVdFLEtBQXhCLEVBQStCLGFBQWEsS0FBS29DLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQTVDLEVBQTJFLGFBQWEsS0FBS0MsUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQXhGLEdBRkY7QUFHRSw4QkFBQyxLQUFELElBQU8sUUFBUSxLQUFLdkMsS0FBTCxDQUFXQyxNQUExQjtBQUhGLFNBSEY7QUFTRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFdBQVI7QUFDRSw4QkFBQyxPQUFELElBQVMsTUFBTSxLQUFLRCxLQUFMLENBQVdLLE9BQTFCO0FBREYsU0FURjtBQWFFO0FBQUE7QUFBQTtBQUNHLGVBQUtMLEtBQUwsQ0FBV08sU0FBWCxDQUFxQkMsSUFBckIsR0FBNEIsb0JBQUMsS0FBRCxJQUFPLFNBQVMsS0FBS1IsS0FBTCxDQUFXTyxTQUEzQixFQUFzQyxRQUFRLEtBQUtrQyxXQUFMLENBQWlCRixJQUFqQixDQUFzQixJQUF0QixDQUE5QyxHQUE1QixHQUEyRztBQUQ5RztBQWJGLE9BREY7QUFtQkQ7Ozs7RUFqSWVHLE1BQU1DLFM7O0FBb0l4QkMsT0FBTzlDLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGVzOiBbXSxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIG1hdGNoOiAnJyxcbiAgICAgIHByb2ZpbGU6ICdodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNTY0eC85YS8yNi84NC85YTI2ODRjNDIxMzE3MTQ3NmUxMzczMmFmM2IyNjUzNy5qcGcnLFxuICAgICAgZGlzcGxheToge1xuICAgICAgICBpbWc6ICdodHRwOi8vY2RuMS13d3cuY29taW5nc29vbi5uZXQvYXNzZXRzL3VwbG9hZHMvMjAxNi8wNS9yb2JpbndpbGxpYW1zLmpwZycsXG4gICAgICB9LFxuICAgICAgdXNlck1hdGNoOiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgaW1hZ2U6ICcnXG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gZmV0Y2hlcyB1c2VyJ3MgbW92aWVzXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9tb3ZpZXMvc2VhcmNoJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgbW92aWVzOiAnLCBkYXRhLm1vdmllcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRpdGxlczogZGF0YS5tb3ZpZXMubWFwKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS50aXRsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcm9maWxlOiBkYXRhLnBpY3R1cmVcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgbW92aWVzOiAnLCBlcnIpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKF9wcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIC8vIHJlbmRlcnMgYSBtYXRjaCBvbnRvIHRoZSBwYWdlXG4gICAgaWYgKHByZXZTdGF0ZS5tYXRjaCAhPT0gdGhpcy5zdGF0ZS5tYXRjaCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tYXRjaCk7XG4gICAgICB2YXIgbWF0Y2ggPSB0aGlzLnN0YXRlLm1hdGNoO1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL3VzZXJzJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBtYXRjaDogbWF0Y2hcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTWF0Y2ggZGF0YTogJywgZGF0YSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB1c2VyTWF0Y2g6IHtcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgbmFtZTogZGF0YS51c2VybmFtZSxcbiAgICAgICAgICAgICAgaW1hZ2U6IGRhdGEucGljdHVyZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHNlYXJjaGluZyBmb3IgbWF0Y2g6ICcsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHNldFRpdGxlU3RhdGUodmFsKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGl0bGU6IHZhbH0pO1xuICB9XG4gIGFkZFRpdGxlKCkge1xuICAgIC8vIGFkZHMgdGl0bGUgdG8gdGhlIGxpc3QgYW5kIGNoZWNrcyBmb3IgbWF0Y2hlc1xuICAgIHZhciBtb3ZpZVRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh0aGlzLnN0YXRlLnRpdGxlcy5pbmRleE9mKG1vdmllVGl0bGUpID09PSAtMSkge1xuICAgICAgdmFyIG5ld1RpdGxlcyA9IHRoaXMuc3RhdGUudGl0bGVzO1xuICAgICAgdGhpcy5xdWVyeU1vdmllKG1vdmllVGl0bGUpO1xuICAgICAgbmV3VGl0bGVzLnB1c2gobW92aWVUaXRsZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGl0bGVzOiBuZXdUaXRsZXMsXG4gICAgICAgIHRpdGxlOiAnJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcXVlcnlNb3ZpZShtb3ZpZVRpdGxlKSB7XG4gICAgLy8gYWRkIG1vdmllIHRvIGRhdGFiYXNlIGFuZCBjaGVja3MgZm9yIG1hdGNoZXNcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL21vdmllcy9zZWFyY2gnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICBtb3ZpZTogbW92aWVUaXRsZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNb3ZpZTogJywgZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1hdGNoOiBkYXRhLm1hdGNoZXNbMF0gPyBkYXRhLm1hdGNoZXNbMF0udXNlcm5hbWUgOiAnJyxcbiAgICAgICAgICBkaXNwbGF5OiBkYXRhLm1vdmllXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBxdWVyeWluZyBmb3IgbW92aWU6ICcsIGVycik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICB0b2dnbGVNYXRjaCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXJNYXRjaDoge1xuICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YSBpZD0nbG9nb3V0JyBocmVmPScvbG9nb3V0Jz5Mb2dvdXQ8L2E+XG4gICAgICAgIDxpbWcgaWQ9J3Byb2ZpbGUnIHNyYz17dGhpcy5zdGF0ZS5wcm9maWxlfSAvPlxuICAgICAgICA8ZGl2IGlkPSdtb3ZpZUxpc3QnPlxuICAgICAgICAgIDxoND5FbnRlciBhIG1vdmllIHRpdGxlOjwvaDQ+XG4gICAgICAgICAgPElucHV0IHRleHQ9e3RoaXMuc3RhdGUudGl0bGV9IHRpdGxlQ2hhbmdlPXt0aGlzLnNldFRpdGxlU3RhdGUuYmluZCh0aGlzKX0gYWRkVG9UaXRsZXM9e3RoaXMuYWRkVGl0bGUuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDxUYWJsZSB0aXRsZXM9e3RoaXMuc3RhdGUudGl0bGVzfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9J21vdmllSW5mbyc+XG4gICAgICAgICAgPERpc3BsYXkgaW5mbz17dGhpcy5zdGF0ZS5kaXNwbGF5fS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUudXNlck1hdGNoLnNob3cgPyA8TWF0Y2ggZGV0YWlscz17dGhpcy5zdGF0ZS51c2VyTWF0Y2h9IHRvZ2dsZT17dGhpcy50b2dnbGVNYXRjaC5iaW5kKHRoaXMpfS8+IDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=