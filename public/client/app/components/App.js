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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJtYXRjaCIsImRpc3BsYXkiLCJpbWciLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibWFwIiwibW92aWUiLCJlcnJvciIsImVyciIsIl9wcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJkYXRhVHlwZSIsInZhbCIsIm1vdmllVGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJuZXdUaXRsZXMiLCJxdWVyeU1vdmllIiwicHVzaCIsIm1hdGNoZXMiLCJ1c2VybmFtZSIsInNldFRpdGxlU3RhdGUiLCJiaW5kIiwiYWRkVGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBREc7QUFFWEMsYUFBTyxFQUZJO0FBR1hDLGFBQU8sRUFISTtBQUlYQyxlQUFTO0FBQ1BDLGFBQUs7QUFERTtBQUpFLEtBQWI7QUFGaUI7QUFVbEI7Ozs7eUNBQ29CO0FBQUE7O0FBQ25CO0FBQ0FDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGdCQURBO0FBRUxDLGdCQUFRLEtBRkg7QUFHTEMsaUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQkMsa0JBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsSUFBakM7QUFDQSxpQkFBS0csUUFBTCxDQUFjO0FBQ1piLG9CQUFRVSxLQUFLSSxHQUFMLENBQVMsaUJBQVM7QUFDeEIscUJBQU9DLE1BQU1kLEtBQWI7QUFDRCxhQUZPO0FBREksV0FBZDtBQUtELFNBVkk7QUFX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LE9BQTFCO0FBREY7QUFSRixPQURGO0FBY0Q7Ozs7RUF4R2U4QixNQUFNQyxTOztBQTJHeEJDLE9BQU90QyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlczogW10sXG4gICAgICB0aXRsZTogJycsXG4gICAgICBtYXRjaDogJycsXG4gICAgICBkaXNwbGF5OiB7XG4gICAgICAgIGltZzogJ2h0dHA6Ly9jZG4xLXd3dy5jb21pbmdzb29uLm5ldC9hc3NldHMvdXBsb2Fkcy8yMDE2LzA1L3JvYmlud2lsbGlhbXMuanBnJyxcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAvLyBmZXRjaGVzIHVzZXIncyBtb3ZpZXNcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL21vdmllcy9zZWFyY2gnLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBtb3ZpZXM6ICcsIGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0aXRsZXM6IGRhdGEubWFwKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS50aXRsZTtcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmZXRjaGluZyBtb3ZpZXM6ICcsIGVycik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoX3ByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgLy8gcmVuZGVycyBhIG1hdGNoIG9udG8gdGhlIHBhZ2VcbiAgICBpZiAocHJldlN0YXRlLm1hdGNoICE9PSB0aGlzLnN0YXRlLm1hdGNoKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1hdGNoKTtcbiAgICAgIHZhciBtYXRjaCA9IHRoaXMuc3RhdGUubWF0Y2g7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvdXNlcnMnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG1hdGNoOiBtYXRjaFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdNYXRjaCBkYXRhOiAnLCBkYXRhKTtcbiAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igc2VhcmNoaW5nIGZvciBtYXRjaDogJywgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgc2V0VGl0bGVTdGF0ZSh2YWwpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt0aXRsZTogdmFsfSk7XG4gIH1cbiAgYWRkVGl0bGUoKSB7XG4gICAgLy8gYWRkcyB0aXRsZSB0byB0aGUgbGlzdCBhbmQgY2hlY2tzIGZvciBtYXRjaGVzXG4gICAgdmFyIG1vdmllVGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUudGl0bGVzLmluZGV4T2YobW92aWVUaXRsZSkgPT09IC0xKSB7XG4gICAgICB2YXIgbmV3VGl0bGVzID0gdGhpcy5zdGF0ZS50aXRsZXM7XG4gICAgICB0aGlzLnF1ZXJ5TW92aWUobW92aWVUaXRsZSk7XG4gICAgICBuZXdUaXRsZXMucHVzaChtb3ZpZVRpdGxlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0aXRsZXM6IG5ld1RpdGxlcyxcbiAgICAgICAgdGl0bGU6ICcnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBxdWVyeU1vdmllKG1vdmllVGl0bGUpIHtcbiAgICAvLyBhZGQgbW92aWUgdG8gZGF0YWJhc2VcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL21vdmllcy9zZWFyY2gnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICBtb3ZpZTogbW92aWVUaXRsZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNb3ZpZTogJywgZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1hdGNoOiBkYXRhLm1hdGNoZXNbMF0udXNlcm5hbWUgfHwgJycsXG4gICAgICAgICAgZGlzcGxheTogZGF0YS5tb3ZpZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcXVlcnlpbmcgZm9yIG1vdmllOiAnLCBlcnIpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YSBpZD0nbG9nb3V0JyBocmVmPScvbG9nb3V0Jz5Mb2dvdXQ8L2E+XG4gICAgICAgIDxkaXYgaWQ9J21vdmllTGlzdCc+XG4gICAgICAgICAgPGg0PkVudGVyIGEgbW92aWUgdGl0bGU6PC9oND5cbiAgICAgICAgICA8SW5wdXQgdGV4dD17dGhpcy5zdGF0ZS50aXRsZX0gdGl0bGVDaGFuZ2U9e3RoaXMuc2V0VGl0bGVTdGF0ZS5iaW5kKHRoaXMpfSBhZGRUb1RpdGxlcz17dGhpcy5hZGRUaXRsZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPFRhYmxlIHRpdGxlcz17dGhpcy5zdGF0ZS50aXRsZXN9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD0nbW92aWVJbmZvJz5cbiAgICAgICAgICA8RGlzcGxheSBpbmZvPXt0aGlzLnN0YXRlLmRpc3BsYXl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=