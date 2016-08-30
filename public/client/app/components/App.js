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
            titles: data.map(function (movie) {
              return movie.title;
            })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJtYXRjaCIsInByb2ZpbGUiLCJkaXNwbGF5IiwiaW1nIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1hcCIsIm1vdmllIiwiZXJyb3IiLCJlcnIiLCJfcHJldlByb3BzIiwicHJldlN0YXRlIiwiZGF0YVR5cGUiLCJ2YWwiLCJtb3ZpZVRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibmV3VGl0bGVzIiwicXVlcnlNb3ZpZSIsInB1c2giLCJtYXRjaGVzIiwidXNlcm5hbWUiLCJzZXRUaXRsZVN0YXRlIiwiYmluZCIsImFkZFRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQURHO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxhQUFPLEVBSEk7QUFJWEMsZUFBUyx5RkFKRTtBQUtYQyxlQUFTO0FBQ1BDLGFBQUs7QUFERTtBQUxFLEtBQWI7QUFGaUI7QUFXbEI7Ozs7eUNBQ29CO0FBQUE7O0FBQ25CO0FBQ0FDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGdCQURBO0FBRUxDLGdCQUFRLEtBRkg7QUFHTEMsaUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQkMsa0JBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsSUFBakM7QUFDQSxpQkFBS0csUUFBTCxDQUFjO0FBQ1pkLG9CQUFRVyxLQUFLSSxHQUFMLENBQVMsaUJBQVM7QUFDeEIscUJBQU9DLE1BQU1mLEtBQWI7QUFDRCxh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TUFBMUI7QUFIRixTQUhGO0FBU0U7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSO0FBQ0UsOEJBQUMsT0FBRCxJQUFTLE1BQU0sS0FBS0QsS0FBTCxDQUFXSyxPQUExQjtBQURGO0FBVEYsT0FERjtBQWVEOzs7O0VBMUdlOEIsTUFBTUMsUzs7QUE2R3hCQyxPQUFPdkMsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZXM6IFtdLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgbWF0Y2g6ICcnLFxuICAgICAgcHJvZmlsZTogJ2h0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS81NjR4LzlhLzI2Lzg0LzlhMjY4NGM0MjEzMTcxNDc2ZTEzNzMyYWYzYjI2NTM3LmpwZycsXG4gICAgICBkaXNwbGF5OiB7XG4gICAgICAgIGltZzogJ2h0dHA6Ly9jZG4xLXd3dy5jb21pbmdzb29uLm5ldC9hc3NldHMvdXBsb2Fkcy8yMDE2LzA1L3JvYmlud2lsbGlhbXMuanBnJyxcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAvLyBmZXRjaGVzIHVzZXIncyBtb3ZpZXNcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL21vdmllcy9zZWFyY2gnLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBtb3ZpZXM6ICcsIGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0aXRsZXM6IGRhdGEubWFwKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS50aXRsZTtcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmZXRjaGluZyBtb3ZpZXM6ICcsIGVycik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoX3ByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgLy8gcmVuZGVycyBhIG1hdGNoIG9udG8gdGhlIHBhZ2VcbiAgICBpZiAocHJldlN0YXRlLm1hdGNoICE9PSB0aGlzLnN0YXRlLm1hdGNoKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1hdGNoKTtcbiAgICAgIHZhciBtYXRjaCA9IHRoaXMuc3RhdGUubWF0Y2g7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvdXNlcnMnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG1hdGNoOiBtYXRjaFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdNYXRjaCBkYXRhOiAnLCBkYXRhKTtcblxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBzZWFyY2hpbmcgZm9yIG1hdGNoOiAnLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBzZXRUaXRsZVN0YXRlKHZhbCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RpdGxlOiB2YWx9KTtcbiAgfVxuICBhZGRUaXRsZSgpIHtcbiAgICAvLyBhZGRzIHRpdGxlIHRvIHRoZSBsaXN0IGFuZCBjaGVja3MgZm9yIG1hdGNoZXNcbiAgICB2YXIgbW92aWVUaXRsZSA9IHRoaXMuc3RhdGUudGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS50aXRsZXMuaW5kZXhPZihtb3ZpZVRpdGxlKSA9PT0gLTEpIHtcbiAgICAgIHZhciBuZXdUaXRsZXMgPSB0aGlzLnN0YXRlLnRpdGxlcztcbiAgICAgIHRoaXMucXVlcnlNb3ZpZShtb3ZpZVRpdGxlKTtcbiAgICAgIG5ld1RpdGxlcy5wdXNoKG1vdmllVGl0bGUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRpdGxlczogbmV3VGl0bGVzLFxuICAgICAgICB0aXRsZTogJydcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHF1ZXJ5TW92aWUobW92aWVUaXRsZSkge1xuICAgIC8vIGFkZCBtb3ZpZSB0byBkYXRhYmFzZVxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvbW92aWVzL3NlYXJjaCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1vdmllOiBtb3ZpZVRpdGxlXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ01vdmllOiAnLCBkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWF0Y2g6IGRhdGEubWF0Y2hlc1swXS51c2VybmFtZSB8fCAnJyxcbiAgICAgICAgICBkaXNwbGF5OiBkYXRhLm1vdmllXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBxdWVyeWluZyBmb3IgbW92aWU6ICcsIGVycik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxhIGlkPSdsb2dvdXQnIGhyZWY9Jy9sb2dvdXQnPkxvZ291dDwvYT5cbiAgICAgICAgPGltZyBpZD0ncHJvZmlsZScgc3JjPXt0aGlzLnN0YXRlLnByb2ZpbGV9IC8+XG4gICAgICAgIDxkaXYgaWQ9J21vdmllTGlzdCc+XG4gICAgICAgICAgPGg0PkVudGVyIGEgbW92aWUgdGl0bGU6PC9oND5cbiAgICAgICAgICA8SW5wdXQgdGV4dD17dGhpcy5zdGF0ZS50aXRsZX0gdGl0bGVDaGFuZ2U9e3RoaXMuc2V0VGl0bGVTdGF0ZS5iaW5kKHRoaXMpfSBhZGRUb1RpdGxlcz17dGhpcy5hZGRUaXRsZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPFRhYmxlIHRpdGxlcz17dGhpcy5zdGF0ZS50aXRsZXN9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD0nbW92aWVJbmZvJz5cbiAgICAgICAgICA8RGlzcGxheSBpbmZvPXt0aGlzLnN0YXRlLmRpc3BsYXl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=