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
    key: 'setTitleState',
    value: function setTitleState(val) {
      this.setState({ title: val });
    }
    // removeItem(title) {
    //   var newTitles = this.state.titles;
    //   newTitles.splice(newTitles.indexOf(item), 1);
    //   this.setState({titles: newTitles})
    // }

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
      }
    }
  }, {
    key: 'queryMovie',
    value: function queryMovie(movieTitle) {
      var _this2 = this;

      // add movie to database
      $.ajax({
        url: '/movies/search',
        method: 'POST',
        dataType: 'json',
        data: {
          movie: movieTitle
        },
        success: function success(data) {
          console.log(data);
          _this2.setState({
            display: data
          });
        },
        error: function error(err) {
          console.log('error querying for movie: ', err);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJkaXNwbGF5IiwiaW1nIiwidmFsIiwic2V0U3RhdGUiLCJtb3ZpZVRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibmV3VGl0bGVzIiwicXVlcnlNb3ZpZSIsInB1c2giLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsIm1vdmllIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImVyciIsInNldFRpdGxlU3RhdGUiLCJiaW5kIiwiYWRkVGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBREc7QUFFWEMsYUFBTyxFQUZJO0FBR1hDLGVBQVM7QUFDUEMsYUFBSztBQURFO0FBSEUsS0FBYjtBQUZpQjtBQVNsQjs7OztrQ0FDYUMsRyxFQUFLO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSixPQUFPRyxHQUFSLEVBQWQ7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7K0JBQ1c7QUFDVDtBQUNBLFVBQUlFLGFBQWEsS0FBS1AsS0FBTCxDQUFXRSxLQUFYLENBQWlCTSxXQUFqQixFQUFqQjtBQUNBLFVBQUksS0FBS1IsS0FBTCxDQUFXQyxNQUFYLENBQWtCUSxPQUFsQixDQUEwQkYsVUFBMUIsTUFBMEMsQ0FBQyxDQUEvQyxFQUFrRDtBQUNoRCxZQUFJRyxZQUFZLEtBQUtWLEtBQUwsQ0FBV0MsTUFBM0I7QUFDQSxhQUFLVSxVQUFMLENBQWdCSixVQUFoQjtBQUNBRyxrQkFBVUUsSUFBVixDQUFlTCxVQUFmO0FBQ0EsYUFBS0QsUUFBTCxDQUFjO0FBQ1pMLGtCQUFRUyxTQURJO0FBRVpSLGlCQUFPO0FBRkssU0FBZDtBQUlEO0FBQ0Y7OzsrQkFDVUssVSxFQUFZO0FBQUE7O0FBQ3JCO0FBQ0FNLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGdCQURBO0FBRUxDLGdCQUFRLE1BRkg7QUFHTEMsa0JBQVUsTUFITDtBQUlMQyxjQUFNO0FBQ0pDLGlCQUFPWjtBQURILFNBSkQ7QUFPTGEsaUJBQVMsaUJBQUNGLElBQUQsRUFBVTtBQUNqQkcsa0JBQVFDLEdBQVIsQ0FBWUosSUFBWjtBQUNBLGlCQUFLWixRQUFMLENBQWM7QUFDWkgscUJBQVNlO0FBREcsV0FBZDtBQUdELFNBWkk7QUFhTEssZUFBTyxlQUFDQyxHQUFELEVBQVM7QUFDZEgsa0JBQVFDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ0UsR0FBMUM7QUFDRDtBQWZJLE9BQVA7QUFpQkQ7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsS0FBRCxJQUFPLE1BQU0sS0FBS3hCLEtBQUwsQ0FBV0UsS0FBeEIsRUFBK0IsYUFBYSxLQUFLdUIsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBNUMsRUFBMkUsYUFBYSxLQUFLQyxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBeEYsR0FGRjtBQUdFLDhCQUFDLEtBQUQsSUFBTyxRQUFRLEtBQUsxQixLQUFMLENBQVdDLE1BQTFCO0FBSEYsU0FGRjtBQVFFO0FBQUE7QUFBQSxZQUFLLElBQUcsV0FBUjtBQUNFLDhCQUFDLE9BQUQsSUFBUyxNQUFNLEtBQUtELEtBQUwsQ0FBV0csT0FBMUI7QUFERjtBQVJGLE9BREY7QUFjRDs7OztFQW5FZXlCLE1BQU1DLFM7O0FBc0V4QkMsT0FBT2hDLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGVzOiBbXSxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRpc3BsYXk6IHtcbiAgICAgICAgaW1nOiAnaHR0cDovL2NkbjEtd3d3LmNvbWluZ3Nvb24ubmV0L2Fzc2V0cy91cGxvYWRzLzIwMTYvMDUvcm9iaW53aWxsaWFtcy5qcGcnLFxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgc2V0VGl0bGVTdGF0ZSh2YWwpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt0aXRsZTogdmFsfSk7XG4gIH1cbiAgLy8gcmVtb3ZlSXRlbSh0aXRsZSkge1xuICAvLyAgIHZhciBuZXdUaXRsZXMgPSB0aGlzLnN0YXRlLnRpdGxlcztcbiAgLy8gICBuZXdUaXRsZXMuc3BsaWNlKG5ld1RpdGxlcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgLy8gICB0aGlzLnNldFN0YXRlKHt0aXRsZXM6IG5ld1RpdGxlc30pXG4gIC8vIH1cbiAgYWRkVGl0bGUoKSB7XG4gICAgLy8gYWRkcyB0aXRsZSB0byB0aGUgbGlzdFxuICAgIHZhciBtb3ZpZVRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh0aGlzLnN0YXRlLnRpdGxlcy5pbmRleE9mKG1vdmllVGl0bGUpID09PSAtMSkge1xuICAgICAgdmFyIG5ld1RpdGxlcyA9IHRoaXMuc3RhdGUudGl0bGVzO1xuICAgICAgdGhpcy5xdWVyeU1vdmllKG1vdmllVGl0bGUpO1xuICAgICAgbmV3VGl0bGVzLnB1c2gobW92aWVUaXRsZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGl0bGVzOiBuZXdUaXRsZXMsXG4gICAgICAgIHRpdGxlOiAnJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcXVlcnlNb3ZpZShtb3ZpZVRpdGxlKSB7XG4gICAgLy8gYWRkIG1vdmllIHRvIGRhdGFiYXNlXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9tb3ZpZXMvc2VhcmNoJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbW92aWU6IG1vdmllVGl0bGVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzcGxheTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgcXVlcnlpbmcgZm9yIG1vdmllOiAnLCBlcnIpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9J21vdmllTGlzdCc+XG4gICAgICAgICAgPGg0PkVudGVyIGEgbW92aWUgdGl0bGU6PC9oND5cbiAgICAgICAgICA8SW5wdXQgdGV4dD17dGhpcy5zdGF0ZS50aXRsZX0gdGl0bGVDaGFuZ2U9e3RoaXMuc2V0VGl0bGVTdGF0ZS5iaW5kKHRoaXMpfSBhZGRUb1RpdGxlcz17dGhpcy5hZGRUaXRsZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPFRhYmxlIHRpdGxlcz17dGhpcy5zdGF0ZS50aXRsZXN9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD0nbW92aWVJbmZvJz5cbiAgICAgICAgICA8RGlzcGxheSBpbmZvPXt0aGlzLnN0YXRlLmRpc3BsYXl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=