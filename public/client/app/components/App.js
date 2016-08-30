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
      // adds title to the list
      var movieTitle = this.state.title.toLowerCase();
      if (this.state.titles.indexOf(movieTitle) === -1) {
        var newTitles = this.state.titles;
        this.queryMovie(movieTitle);
        newTitles.push(movieTitle);
        this.setState({
          titles: newTitles,
          title: ''
        });
        this.checkMatches(movieTitle);
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
    key: 'checkMatches',
    value: function checkMatches(movieTitle) {
      // checks if movie is in other users' movieLists
      $.ajax({
        url: '/movies/users',
        method: 'POST',
        dataType: 'json',
        data: {
          movie: movieTitle
        },
        success: function success(data) {
          console.log('Matched User: ', data);
        },
        error: function error(err) {
          console.log('Error checking for matches: ', err);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJkaXNwbGF5IiwiaW1nIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1hcCIsIm1vdmllIiwiZXJyb3IiLCJlcnIiLCJ2YWwiLCJtb3ZpZVRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibmV3VGl0bGVzIiwicXVlcnlNb3ZpZSIsInB1c2giLCJjaGVja01hdGNoZXMiLCJkYXRhVHlwZSIsInNldFRpdGxlU3RhdGUiLCJiaW5kIiwiYWRkVGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBREc7QUFFWEMsYUFBTyxFQUZJO0FBR1hDLGVBQVM7QUFDUEMsYUFBSztBQURFO0FBSEUsS0FBYjtBQUZpQjtBQVNsQjs7Ozt5Q0FDb0I7QUFBQTs7QUFDbkI7QUFDQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssZ0JBREE7QUFFTEMsZ0JBQVEsS0FGSDtBQUdMQyxpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCQyxrQkFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDRixJQUFqQztBQUNBLGlCQUFLRyxRQUFMLENBQWM7QUFDWlosb0JBQVFTLEtBQUtJLEdBQUwsQ0FBUyxpQkFBUztBQUN4QixxQkFBT0MsTUFBTWIsS0FBYjtBQUNELGFBRk87QUFESSxXQUFkO0FBS0QsU0FWSTtBQVdMYyxlQUFPLGVBQUNDLEdBQUQsRUFBUztBQUNkTixrQkFBUUMsR0FBUixDQUFZLHlCQUFaLEVBQXVDSyxHQUF2QztBQUNEO0FBYkksT0FBUDtBQWVEOzs7a0NBQ2FDLEcsRUFBSztBQUNqQixXQUFLTCxRQUFMLENBQWMsRUFBQ1gsT0FBT2dCLEdBQVIsRUFBZDtBQUNEOzs7K0JBQ1U7QUFDVDtBQUNBLFVBQUlDLGFBQWEsS0FBS25CLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQmtCLFdBQWpCLEVBQWpCO0FBQ0EsVUFBSSxLQUFLcEIsS0FBTCxDQUFXQyxNQUFYLENBQWtCb0IsT0FBbEIsQ0FBMEJGLFVBQTFCLE1BQTBDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaEQsWUFBSUcsWUFBWSxLQUFLdEIsS0FBTCxDQUFXQyxNQUEzQjtBQUNBLGFBQUtzQixVQUFMLENBQWdCSixVQUFoQjtBQUNBRyxrQkFBVUUsSUFBVixDQUFlTCxVQUFmO0FBQ0EsYUFBS04sUUFBTCxDQUFjO0FBQ1paLGtCQUFRcUIsU0FESTtBQUVacEIsaUJBQU87QUFGSyxTQUFkO0FBSUEsYUFBS3VCLFlBQUwsQ0FBa0JOLFVBQWxCO0FBQ0Q7QUFDRjs7OytCQUNVQSxVLEVBQVk7QUFBQTs7QUFDckI7QUFDQWQsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssZ0JBREE7QUFFTEMsZ0JBQVEsTUFGSDtBQUdMa0Isa0JBQVUsTUFITDtBQUlMaEIsY0FBTTtBQUNKSyxpQkFBT0k7QUFESCxTQUpEO0FBT0xWLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJDLGtCQUFRQyxHQUFSLENBQVksU0FBWixFQUF1QkYsSUFBdkI7QUFDQSxpQkFBS0csUUFBTCxDQUFjO0FBQ1pWLHFCQUFTTztBQURHLFdBQWQ7QUFHRCxTQVpJO0FBYUxNLGVBQU8sZUFBQ0MsR0FBRCxFQUFTO0FBQ2ROLGtCQUFRQyxHQUFSLENBQVksNEJBQVosRUFBMENLLEdBQTFDO0FBQ0Q7QUFmSSxPQUFQO0FBaUJEOzs7aUNBQ1lFLFUsRUFBWTtBQUN2QjtBQUNBZCxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxlQURBO0FBRUxDLGdCQUFRLE1BRkg7QUFHTGtCLGtCQUFVLE1BSEw7QUFJTGhCLGNBQU07QUFDSkssaUJBQU9JO0FBREgsU0FKRDtBQU9MVixpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCQyxrQkFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCRixJQUE5QjtBQUVELFNBVkk7QUFXTE0sZUFBTyxlQUFDQyxHQUFELEVBQVM7QUFDZE4sa0JBQVFDLEdBQVIsQ0FBWSw4QkFBWixFQUE0Q0ssR0FBNUM7QUFDRDtBQWJJLE9BQVA7QUFlRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxJQUFHLFFBQU4sRUFBZSxNQUFLLFNBQXBCO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsS0FBRCxJQUFPLE1BQU0sS0FBS2pCLEtBQUwsQ0FBV0UsS0FBeEIsRUFBK0IsYUFBYSxLQUFLeUIsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBNUMsRUFBMkUsYUFBYSxLQUFLQyxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBeEYsR0FGRjtBQUdFLDhCQUFDLEtBQUQsSUFBTyxRQUFRLEtBQUs1QixLQUFMLENBQVdDLE1BQTFCO0FBSEYsU0FGRjtBQVFFO0FBQUE7QUFBQSxZQUFLLElBQUcsV0FBUjtBQUNFLDhCQUFDLE9BQUQsSUFBUyxNQUFNLEtBQUtELEtBQUwsQ0FBV0csT0FBMUI7QUFERjtBQVJGLE9BREY7QUFjRDs7OztFQW5HZTJCLE1BQU1DLFM7O0FBc0d4QkMsT0FBT2xDLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGVzOiBbXSxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRpc3BsYXk6IHtcbiAgICAgICAgaW1nOiAnaHR0cDovL2NkbjEtd3d3LmNvbWluZ3Nvb24ubmV0L2Fzc2V0cy91cGxvYWRzLzIwMTYvMDUvcm9iaW53aWxsaWFtcy5qcGcnLFxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vIGZldGNoZXMgdXNlcidzIG1vdmllc1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvbW92aWVzL3NlYXJjaCcsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIG1vdmllczogJywgZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRpdGxlczogZGF0YS5tYXAobW92aWUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vdmllLnRpdGxlO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZldGNoaW5nIG1vdmllczogJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHNldFRpdGxlU3RhdGUodmFsKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGl0bGU6IHZhbH0pO1xuICB9XG4gIGFkZFRpdGxlKCkge1xuICAgIC8vIGFkZHMgdGl0bGUgdG8gdGhlIGxpc3RcbiAgICB2YXIgbW92aWVUaXRsZSA9IHRoaXMuc3RhdGUudGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS50aXRsZXMuaW5kZXhPZihtb3ZpZVRpdGxlKSA9PT0gLTEpIHtcbiAgICAgIHZhciBuZXdUaXRsZXMgPSB0aGlzLnN0YXRlLnRpdGxlcztcbiAgICAgIHRoaXMucXVlcnlNb3ZpZShtb3ZpZVRpdGxlKTtcbiAgICAgIG5ld1RpdGxlcy5wdXNoKG1vdmllVGl0bGUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRpdGxlczogbmV3VGl0bGVzLFxuICAgICAgICB0aXRsZTogJydcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoZWNrTWF0Y2hlcyhtb3ZpZVRpdGxlKTtcbiAgICB9XG4gIH1cbiAgcXVlcnlNb3ZpZShtb3ZpZVRpdGxlKSB7XG4gICAgLy8gYWRkIG1vdmllIHRvIGRhdGFiYXNlXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9tb3ZpZXMvc2VhcmNoJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbW92aWU6IG1vdmllVGl0bGVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnTW92aWU6ICcsIGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXNwbGF5OiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBxdWVyeWluZyBmb3IgbW92aWU6ICcsIGVycik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBjaGVja01hdGNoZXMobW92aWVUaXRsZSkge1xuICAgIC8vIGNoZWNrcyBpZiBtb3ZpZSBpcyBpbiBvdGhlciB1c2VycycgbW92aWVMaXN0c1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvbW92aWVzL3VzZXJzJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbW92aWU6IG1vdmllVGl0bGVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnTWF0Y2hlZCBVc2VyOiAnLCBkYXRhKTtcbiAgICAgICAgXG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGNoZWNraW5nIGZvciBtYXRjaGVzOiAnLCBlcnIpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YSBpZD0nbG9nb3V0JyBocmVmPScvbG9nb3V0Jz5Mb2dvdXQ8L2E+XG4gICAgICAgIDxkaXYgaWQ9J21vdmllTGlzdCc+XG4gICAgICAgICAgPGg0PkVudGVyIGEgbW92aWUgdGl0bGU6PC9oND5cbiAgICAgICAgICA8SW5wdXQgdGV4dD17dGhpcy5zdGF0ZS50aXRsZX0gdGl0bGVDaGFuZ2U9e3RoaXMuc2V0VGl0bGVTdGF0ZS5iaW5kKHRoaXMpfSBhZGRUb1RpdGxlcz17dGhpcy5hZGRUaXRsZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPFRhYmxlIHRpdGxlcz17dGhpcy5zdGF0ZS50aXRsZXN9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD0nbW92aWVJbmZvJz5cbiAgICAgICAgICA8RGlzcGxheSBpbmZvPXt0aGlzLnN0YXRlLmRpc3BsYXl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=