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
            display: data
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJkaXNwbGF5IiwiaW1nIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1hcCIsIm1vdmllIiwiZXJyb3IiLCJlcnIiLCJ2YWwiLCJtb3ZpZVRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibmV3VGl0bGVzIiwicXVlcnlNb3ZpZSIsInB1c2giLCJkYXRhVHlwZSIsInNldFRpdGxlU3RhdGUiLCJiaW5kIiwiYWRkVGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBREc7QUFFWEMsYUFBTyxFQUZJO0FBR1hDLGVBQVM7QUFDUEMsYUFBSztBQURFO0FBSEUsS0FBYjtBQUZpQjtBQVNsQjs7Ozt5Q0FDb0I7QUFBQTs7QUFDbkI7QUFDQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssZ0JBREE7QUFFTEMsZ0JBQVEsS0FGSDtBQUdMQyxpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCQyxrQkFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDRixJQUFqQztBQUNBLGlCQUFLRyxRQUFMLENBQWM7QUFDWlosb0JBQVFTLEtBQUtJLEdBQUwsQ0FBUyxpQkFBUztBQUN4QixxQkFBT0MsTUFBTWIsS0FBYjtBQUNELGFBRk87QUFESSxXQUFkO0FBS0QsU0FWSTtBQVdMYyxlQUFPLGVBQUNDLEdBQUQsRUFBUztBQUNkTixrQkFBUUMsR0FBUixDQUFZLHlCQUFaLEVBQXVDSyxHQUF2QztBQUNEO0FBYkksT0FBUDtBQWVEOzs7a0NBQ2FDLEcsRUFBSztBQUNqQixXQUFLTCxRQUFMLENBQWMsRUFBQ1gsT0FBT2dCLEdBQVIsRUFBZDtBQUNEOzs7K0JBQ1U7QUFDVDtBQUNBLFVBQUlDLGFBQWEsS0FBS25CLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQmtCLFdBQWpCLEVBQWpCO0FBQ0EsVUFBSSxLQUFLcEIsS0FBTCxDQUFXQyxNQUFYLENBQWtCb0IsT0FBbEIsQ0FBMEJGLFVBQTFCLE1BQTBDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaEQsWUFBSUcsWUFBWSxLQUFLdEIsS0FBTCxDQUFXQyxNQUEzQjtBQUNBLGFBQUtzQixVQUFMLENBQWdCSixVQUFoQjtBQUNBRyxrQkFBVUUsSUFBVixDQUFlTCxVQUFmO0FBQ0EsYUFBS04sUUFBTCxDQUFjO0FBQ1paLGtCQUFRcUIsU0FESTtBQUVacEIsaUJBQU87QUFGSyxTQUFkO0FBSUQ7QUFDRjs7OytCQUNVaUIsVSxFQUFZO0FBQUE7O0FBQ3JCO0FBQ0FkLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGdCQURBO0FBRUxDLGdCQUFRLE1BRkg7QUFHTGlCLGtCQUFVLE1BSEw7QUFJTGYsY0FBTTtBQUNKSyxpQkFBT0k7QUFESCxTQUpEO0FBT0xWLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJDLGtCQUFRQyxHQUFSLENBQVksU0FBWixFQUF1QkYsSUFBdkI7QUFDQSxpQkFBS0csUUFBTCxDQUFjO0FBQ1pWLHFCQUFTTztBQURHLFdBQWQ7QUFHRCxTQVpJO0FBYUxNLGVBQU8sZUFBQ0MsR0FBRCxFQUFTO0FBQ2ROLGtCQUFRQyxHQUFSLENBQVksNEJBQVosRUFBMENLLEdBQTFDO0FBQ0Q7QUFmSSxPQUFQO0FBaUJEOzs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLElBQUcsUUFBTixFQUFlLE1BQUssU0FBcEI7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFdBQVI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSw4QkFBQyxLQUFELElBQU8sTUFBTSxLQUFLakIsS0FBTCxDQUFXRSxLQUF4QixFQUErQixhQUFhLEtBQUt3QixhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUE1QyxFQUEyRSxhQUFhLEtBQUtDLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUF4RixHQUZGO0FBR0UsOEJBQUMsS0FBRCxJQUFPLFFBQVEsS0FBSzNCLEtBQUwsQ0FBV0MsTUFBMUI7QUFIRixTQUZGO0FBUUU7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSO0FBQ0UsOEJBQUMsT0FBRCxJQUFTLE1BQU0sS0FBS0QsS0FBTCxDQUFXRyxPQUExQjtBQURGO0FBUkYsT0FERjtBQWNEOzs7O0VBaEZlMEIsTUFBTUMsUzs7QUFtRnhCQyxPQUFPakMsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZXM6IFtdLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGlzcGxheToge1xuICAgICAgICBpbWc6ICdodHRwOi8vY2RuMS13d3cuY29taW5nc29vbi5uZXQvYXNzZXRzL3VwbG9hZHMvMjAxNi8wNS9yb2JpbndpbGxpYW1zLmpwZycsXG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gZmV0Y2hlcyB1c2VyJ3MgbW92aWVzXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9tb3ZpZXMvc2VhcmNoJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgbW92aWVzOiAnLCBkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGl0bGVzOiBkYXRhLm1hcChtb3ZpZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW92aWUudGl0bGU7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgbW92aWVzOiAnLCBlcnIpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgc2V0VGl0bGVTdGF0ZSh2YWwpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt0aXRsZTogdmFsfSk7XG4gIH1cbiAgYWRkVGl0bGUoKSB7XG4gICAgLy8gYWRkcyB0aXRsZSB0byB0aGUgbGlzdCBhbmQgY2hlY2tzIGZvciBtYXRjaGVzXG4gICAgdmFyIG1vdmllVGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUudGl0bGVzLmluZGV4T2YobW92aWVUaXRsZSkgPT09IC0xKSB7XG4gICAgICB2YXIgbmV3VGl0bGVzID0gdGhpcy5zdGF0ZS50aXRsZXM7XG4gICAgICB0aGlzLnF1ZXJ5TW92aWUobW92aWVUaXRsZSk7XG4gICAgICBuZXdUaXRsZXMucHVzaChtb3ZpZVRpdGxlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0aXRsZXM6IG5ld1RpdGxlcyxcbiAgICAgICAgdGl0bGU6ICcnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBxdWVyeU1vdmllKG1vdmllVGl0bGUpIHtcbiAgICAvLyBhZGQgbW92aWUgdG8gZGF0YWJhc2VcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL21vdmllcy9zZWFyY2gnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICBtb3ZpZTogbW92aWVUaXRsZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNb3ZpZTogJywgZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpc3BsYXk6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHF1ZXJ5aW5nIGZvciBtb3ZpZTogJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaWQ9J2xvZ291dCcgaHJlZj0nL2xvZ291dCc+TG9nb3V0PC9hPlxuICAgICAgICA8ZGl2IGlkPSdtb3ZpZUxpc3QnPlxuICAgICAgICAgIDxoND5FbnRlciBhIG1vdmllIHRpdGxlOjwvaDQ+XG4gICAgICAgICAgPElucHV0IHRleHQ9e3RoaXMuc3RhdGUudGl0bGV9IHRpdGxlQ2hhbmdlPXt0aGlzLnNldFRpdGxlU3RhdGUuYmluZCh0aGlzKX0gYWRkVG9UaXRsZXM9e3RoaXMuYWRkVGl0bGUuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDxUYWJsZSB0aXRsZXM9e3RoaXMuc3RhdGUudGl0bGVzfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9J21vdmllSW5mbyc+XG4gICAgICAgICAgPERpc3BsYXkgaW5mbz17dGhpcy5zdGF0ZS5kaXNwbGF5fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19