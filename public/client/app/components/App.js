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
      img: 'http://cdn1-www.comingsoon.net/assets/uploads/2016/05/robinwilliams.jpg'
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
            img: data.img
          });
          _this2.render();
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
          React.createElement(Display, { img: this.state.img })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJpbWciLCJ2YWwiLCJzZXRTdGF0ZSIsIm1vdmllVGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJuZXdUaXRsZXMiLCJxdWVyeU1vdmllIiwicHVzaCIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJkYXRhIiwibW92aWUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsImVycm9yIiwiZXJyIiwic2V0VGl0bGVTdGF0ZSIsImJpbmQiLCJhZGRUaXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFERztBQUVYQyxhQUFPLEVBRkk7QUFHWEMsV0FBSztBQUhNLEtBQWI7QUFGaUI7QUFPbEI7Ozs7a0NBQ2FDLEcsRUFBSztBQUNqQixXQUFLQyxRQUFMLENBQWMsRUFBQ0gsT0FBT0UsR0FBUixFQUFkO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OytCQUNXO0FBQ1Q7QUFDQSxVQUFJRSxhQUFhLEtBQUtOLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQkssV0FBakIsRUFBakI7QUFDQSxVQUFJLEtBQUtQLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk8sT0FBbEIsQ0FBMEJGLFVBQTFCLE1BQTBDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaEQsWUFBSUcsWUFBWSxLQUFLVCxLQUFMLENBQVdDLE1BQTNCO0FBQ0EsYUFBS1MsVUFBTCxDQUFnQkosVUFBaEI7QUFDQUcsa0JBQVVFLElBQVYsQ0FBZUwsVUFBZjtBQUNBLGFBQUtELFFBQUwsQ0FBYztBQUNaSixrQkFBUVEsU0FESTtBQUVaUCxpQkFBTztBQUZLLFNBQWQ7QUFJRDtBQUNGOzs7K0JBQ1VJLFUsRUFBWTtBQUFBOztBQUNyQjtBQUNBTSxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxnQkFEQTtBQUVMQyxnQkFBUSxNQUZIO0FBR0xDLGtCQUFVLE1BSEw7QUFJTEMsY0FBTTtBQUNKQyxpQkFBT1o7QUFESCxTQUpEO0FBT0xhLGlCQUFTLGlCQUFDRixJQUFELEVBQVU7QUFDakJHLGtCQUFRQyxHQUFSLENBQVlKLElBQVo7QUFDQSxpQkFBS1osUUFBTCxDQUFjO0FBQ1pGLGlCQUFLYyxLQUFLZDtBQURFLFdBQWQ7QUFHQSxpQkFBS21CLE1BQUw7QUFDRCxTQWJJO0FBY0xDLGVBQU8sZUFBQ0MsR0FBRCxFQUFTO0FBQ2RKLGtCQUFRQyxHQUFSLENBQVksNEJBQVosRUFBMENHLEdBQTFDO0FBQ0Q7QUFoQkksT0FBUDtBQWtCRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFdBQVI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSw4QkFBQyxLQUFELElBQU8sTUFBTSxLQUFLeEIsS0FBTCxDQUFXRSxLQUF4QixFQUErQixhQUFhLEtBQUt1QixhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUE1QyxFQUEyRSxhQUFhLEtBQUtDLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUF4RixHQUZGO0FBR0UsOEJBQUMsS0FBRCxJQUFPLFFBQVEsS0FBSzFCLEtBQUwsQ0FBV0MsTUFBMUI7QUFIRixTQUZGO0FBUUU7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSO0FBQ0UsOEJBQUMsT0FBRCxJQUFTLEtBQUssS0FBS0QsS0FBTCxDQUFXRyxHQUF6QjtBQURGO0FBUkYsT0FERjtBQWNEOzs7O0VBbEVleUIsTUFBTUMsUzs7QUFxRXhCQyxPQUFPaEMsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZXM6IFtdLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgaW1nOiAnaHR0cDovL2NkbjEtd3d3LmNvbWluZ3Nvb24ubmV0L2Fzc2V0cy91cGxvYWRzLzIwMTYvMDUvcm9iaW53aWxsaWFtcy5qcGcnXG4gICAgfTtcbiAgfVxuICBzZXRUaXRsZVN0YXRlKHZhbCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RpdGxlOiB2YWx9KTtcbiAgfVxuICAvLyByZW1vdmVJdGVtKHRpdGxlKSB7XG4gIC8vICAgdmFyIG5ld1RpdGxlcyA9IHRoaXMuc3RhdGUudGl0bGVzO1xuICAvLyAgIG5ld1RpdGxlcy5zcGxpY2UobmV3VGl0bGVzLmluZGV4T2YoaXRlbSksIDEpO1xuICAvLyAgIHRoaXMuc2V0U3RhdGUoe3RpdGxlczogbmV3VGl0bGVzfSlcbiAgLy8gfVxuICBhZGRUaXRsZSgpIHtcbiAgICAvLyBhZGRzIHRpdGxlIHRvIHRoZSBsaXN0XG4gICAgdmFyIG1vdmllVGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUudGl0bGVzLmluZGV4T2YobW92aWVUaXRsZSkgPT09IC0xKSB7XG4gICAgICB2YXIgbmV3VGl0bGVzID0gdGhpcy5zdGF0ZS50aXRsZXM7XG4gICAgICB0aGlzLnF1ZXJ5TW92aWUobW92aWVUaXRsZSk7XG4gICAgICBuZXdUaXRsZXMucHVzaChtb3ZpZVRpdGxlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0aXRsZXM6IG5ld1RpdGxlcyxcbiAgICAgICAgdGl0bGU6ICcnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBxdWVyeU1vdmllKG1vdmllVGl0bGUpIHtcbiAgICAvLyBhZGQgbW92aWUgdG8gZGF0YWJhc2VcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL21vdmllcy9zZWFyY2gnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICBtb3ZpZTogbW92aWVUaXRsZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbWc6IGRhdGEuaW1nXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBxdWVyeWluZyBmb3IgbW92aWU6ICcsIGVycik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPGRpdiBpZD0nbW92aWVMaXN0Jz5cbiAgICAgICAgICA8aDQ+RW50ZXIgYSBtb3ZpZSB0aXRsZTo8L2g0PlxuICAgICAgICAgIDxJbnB1dCB0ZXh0PXt0aGlzLnN0YXRlLnRpdGxlfSB0aXRsZUNoYW5nZT17dGhpcy5zZXRUaXRsZVN0YXRlLmJpbmQodGhpcyl9IGFkZFRvVGl0bGVzPXt0aGlzLmFkZFRpdGxlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8VGFibGUgdGl0bGVzPXt0aGlzLnN0YXRlLnRpdGxlc30vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPSdtb3ZpZUluZm8nPlxuICAgICAgICAgIDxEaXNwbGF5IGltZz17dGhpcy5zdGF0ZS5pbWd9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=