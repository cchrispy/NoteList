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
      this.queryMovie(this.state.title);
      var newTitles = this.state.titles;
      newTitles.push(this.state.title);
      this.setState({
        titles: newTitles,
        title: ''
      });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJpbWciLCJ2YWwiLCJzZXRTdGF0ZSIsInF1ZXJ5TW92aWUiLCJuZXdUaXRsZXMiLCJwdXNoIiwibW92aWVUaXRsZSIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJkYXRhIiwibW92aWUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInNldFRpdGxlU3RhdGUiLCJiaW5kIiwiYWRkVGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBREc7QUFFWEMsYUFBTyxFQUZJO0FBR1hDLFdBQUs7QUFITSxLQUFiO0FBRmlCO0FBT2xCOzs7O2tDQUNhQyxHLEVBQUs7QUFDakIsV0FBS0MsUUFBTCxDQUFjLEVBQUNILE9BQU9FLEdBQVIsRUFBZDtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsrQkFDVztBQUNULFdBQUtFLFVBQUwsQ0FBZ0IsS0FBS04sS0FBTCxDQUFXRSxLQUEzQjtBQUNBLFVBQUlLLFlBQVksS0FBS1AsS0FBTCxDQUFXQyxNQUEzQjtBQUNBTSxnQkFBVUMsSUFBVixDQUFlLEtBQUtSLEtBQUwsQ0FBV0UsS0FBMUI7QUFDQSxXQUFLRyxRQUFMLENBQWM7QUFDWkosZ0JBQVFNLFNBREk7QUFFWkwsZUFBTztBQUZLLE9BQWQ7QUFJRDs7OytCQUNVTyxVLEVBQVk7QUFBQTs7QUFDckI7QUFDQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssZ0JBREE7QUFFTEMsZ0JBQVEsTUFGSDtBQUdMQyxrQkFBVSxNQUhMO0FBSUxDLGNBQU07QUFDSkMsaUJBQU9QO0FBREgsU0FKRDtBQU9MUSxpQkFBUyxpQkFBQ0YsSUFBRCxFQUFVO0FBQ2pCRyxrQkFBUUMsR0FBUixDQUFZSixJQUFaO0FBQ0EsaUJBQUtWLFFBQUwsQ0FBYztBQUNaRixpQkFBS1ksS0FBS1o7QUFERSxXQUFkO0FBR0Q7QUFaSSxPQUFQO0FBY0Q7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsS0FBRCxJQUFPLE1BQU0sS0FBS0gsS0FBTCxDQUFXRSxLQUF4QixFQUErQixhQUFhLEtBQUtrQixhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUE1QyxFQUEyRSxhQUFhLEtBQUtDLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUF4RixHQUZGO0FBR0UsOEJBQUMsS0FBRCxJQUFPLFFBQVEsS0FBS3JCLEtBQUwsQ0FBV0MsTUFBMUI7QUFIRixTQUZGO0FBUUU7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSO0FBQ0UsOEJBQUMsT0FBRCxJQUFTLEtBQUssS0FBS0QsS0FBTCxDQUFXRyxHQUF6QjtBQURGO0FBUkYsT0FERjtBQWNEOzs7O0VBMURlb0IsTUFBTUMsUzs7QUE2RHhCQyxPQUFPM0IsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZXM6IFtdLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgaW1nOiAnaHR0cDovL2NkbjEtd3d3LmNvbWluZ3Nvb24ubmV0L2Fzc2V0cy91cGxvYWRzLzIwMTYvMDUvcm9iaW53aWxsaWFtcy5qcGcnXG4gICAgfTtcbiAgfVxuICBzZXRUaXRsZVN0YXRlKHZhbCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RpdGxlOiB2YWx9KTtcbiAgfVxuICAvLyByZW1vdmVJdGVtKHRpdGxlKSB7XG4gIC8vICAgdmFyIG5ld1RpdGxlcyA9IHRoaXMuc3RhdGUudGl0bGVzO1xuICAvLyAgIG5ld1RpdGxlcy5zcGxpY2UobmV3VGl0bGVzLmluZGV4T2YoaXRlbSksIDEpO1xuICAvLyAgIHRoaXMuc2V0U3RhdGUoe3RpdGxlczogbmV3VGl0bGVzfSlcbiAgLy8gfVxuICBhZGRUaXRsZSgpIHtcbiAgICB0aGlzLnF1ZXJ5TW92aWUodGhpcy5zdGF0ZS50aXRsZSk7XG4gICAgdmFyIG5ld1RpdGxlcyA9IHRoaXMuc3RhdGUudGl0bGVzO1xuICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuc3RhdGUudGl0bGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGl0bGVzOiBuZXdUaXRsZXMsXG4gICAgICB0aXRsZTogJydcbiAgICB9KVxuICB9XG4gIHF1ZXJ5TW92aWUobW92aWVUaXRsZSkge1xuICAgIC8vIGFkZCBtb3ZpZSB0byBkYXRhYmFzZVxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvbW92aWVzL3NlYXJjaCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1vdmllOiBtb3ZpZVRpdGxlXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGltZzogZGF0YS5pbWdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cblxuICAgICAgICA8ZGl2IGlkPSdtb3ZpZUxpc3QnPlxuICAgICAgICAgIDxoND5FbnRlciBhIG1vdmllIHRpdGxlOjwvaDQ+XG4gICAgICAgICAgPElucHV0IHRleHQ9e3RoaXMuc3RhdGUudGl0bGV9IHRpdGxlQ2hhbmdlPXt0aGlzLnNldFRpdGxlU3RhdGUuYmluZCh0aGlzKX0gYWRkVG9UaXRsZXM9e3RoaXMuYWRkVGl0bGUuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDxUYWJsZSB0aXRsZXM9e3RoaXMuc3RhdGUudGl0bGVzfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9J21vdmllSW5mbyc+XG4gICAgICAgICAgPERpc3BsYXkgaW1nPXt0aGlzLnN0YXRlLmltZ30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==