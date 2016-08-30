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
    key: 'logout',
    value: function logout() {
      $.ajax({
        url: '/logout',
        method: 'GET',
        success: function success(data) {
          window.location = '/login';
        },
        error: function error(err) {
          console.log('error logging out: ', err);
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
          'button',
          { id: 'logout', onClick: this.logout.bind(this) },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJkaXNwbGF5IiwiaW1nIiwidmFsIiwic2V0U3RhdGUiLCJtb3ZpZVRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibmV3VGl0bGVzIiwicXVlcnlNb3ZpZSIsInB1c2giLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsIm1vdmllIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImVyciIsIndpbmRvdyIsImxvY2F0aW9uIiwibG9nb3V0IiwiYmluZCIsInNldFRpdGxlU3RhdGUiLCJhZGRUaXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFERztBQUVYQyxhQUFPLEVBRkk7QUFHWEMsZUFBUztBQUNQQyxhQUFLO0FBREU7QUFIRSxLQUFiO0FBRmlCO0FBU2xCOzs7O2tDQUNhQyxHLEVBQUs7QUFDakIsV0FBS0MsUUFBTCxDQUFjLEVBQUNKLE9BQU9HLEdBQVIsRUFBZDtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsrQkFDVztBQUNUO0FBQ0EsVUFBSUUsYUFBYSxLQUFLUCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJNLFdBQWpCLEVBQWpCO0FBQ0EsVUFBSSxLQUFLUixLQUFMLENBQVdDLE1BQVgsQ0FBa0JRLE9BQWxCLENBQTBCRixVQUExQixNQUEwQyxDQUFDLENBQS9DLEVBQWtEO0FBQ2hELFlBQUlHLFlBQVksS0FBS1YsS0FBTCxDQUFXQyxNQUEzQjtBQUNBLGFBQUtVLFVBQUwsQ0FBZ0JKLFVBQWhCO0FBQ0FHLGtCQUFVRSxJQUFWLENBQWVMLFVBQWY7QUFDQSxhQUFLRCxRQUFMLENBQWM7QUFDWkwsa0JBQVFTLFNBREk7QUFFWlIsaUJBQU87QUFGSyxTQUFkO0FBSUQ7QUFDRjs7OytCQUNVSyxVLEVBQVk7QUFBQTs7QUFDckI7QUFDQU0sUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssZ0JBREE7QUFFTEMsZ0JBQVEsTUFGSDtBQUdMQyxrQkFBVSxNQUhMO0FBSUxDLGNBQU07QUFDSkMsaUJBQU9aO0FBREgsU0FKRDtBQU9MYSxpQkFBUyxpQkFBQ0YsSUFBRCxFQUFVO0FBQ2pCRyxrQkFBUUMsR0FBUixDQUFZSixJQUFaO0FBQ0EsaUJBQUtaLFFBQUwsQ0FBYztBQUNaSCxxQkFBU2U7QUFERyxXQUFkO0FBR0QsU0FaSTtBQWFMSyxlQUFPLGVBQUNDLEdBQUQsRUFBUztBQUNkSCxrQkFBUUMsR0FBUixDQUFZLDRCQUFaLEVBQTBDRSxHQUExQztBQUNEO0FBZkksT0FBUDtBQWlCRDs7OzZCQUNRO0FBQ1BYLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLFNBREE7QUFFTEMsZ0JBQVEsS0FGSDtBQUdMSSxpQkFBUyxpQkFBQ0YsSUFBRCxFQUFVO0FBQ2pCTyxpQkFBT0MsUUFBUCxHQUFrQixRQUFsQjtBQUNELFNBTEk7QUFNTEgsZUFBTyxlQUFDQyxHQUFELEVBQVM7QUFDZEgsa0JBQVFDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0UsR0FBbkM7QUFDRDtBQVJJLE9BQVA7QUFVRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBUSxJQUFHLFFBQVgsRUFBb0IsU0FBUyxLQUFLRyxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBN0I7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFdBQVI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSw4QkFBQyxLQUFELElBQU8sTUFBTSxLQUFLNUIsS0FBTCxDQUFXRSxLQUF4QixFQUErQixhQUFhLEtBQUsyQixhQUFMLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QixDQUE1QyxFQUEyRSxhQUFhLEtBQUtFLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQUF4RixHQUZGO0FBR0UsOEJBQUMsS0FBRCxJQUFPLFFBQVEsS0FBSzVCLEtBQUwsQ0FBV0MsTUFBMUI7QUFIRixTQUZGO0FBUUU7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSO0FBQ0UsOEJBQUMsT0FBRCxJQUFTLE1BQU0sS0FBS0QsS0FBTCxDQUFXRyxPQUExQjtBQURGO0FBUkYsT0FERjtBQWNEOzs7O0VBL0VlNEIsTUFBTUMsUzs7QUFrRnhCUCxPQUFPM0IsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZXM6IFtdLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGlzcGxheToge1xuICAgICAgICBpbWc6ICdodHRwOi8vY2RuMS13d3cuY29taW5nc29vbi5uZXQvYXNzZXRzL3VwbG9hZHMvMjAxNi8wNS9yb2JpbndpbGxpYW1zLmpwZycsXG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBzZXRUaXRsZVN0YXRlKHZhbCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RpdGxlOiB2YWx9KTtcbiAgfVxuICAvLyByZW1vdmVJdGVtKHRpdGxlKSB7XG4gIC8vICAgdmFyIG5ld1RpdGxlcyA9IHRoaXMuc3RhdGUudGl0bGVzO1xuICAvLyAgIG5ld1RpdGxlcy5zcGxpY2UobmV3VGl0bGVzLmluZGV4T2YoaXRlbSksIDEpO1xuICAvLyAgIHRoaXMuc2V0U3RhdGUoe3RpdGxlczogbmV3VGl0bGVzfSlcbiAgLy8gfVxuICBhZGRUaXRsZSgpIHtcbiAgICAvLyBhZGRzIHRpdGxlIHRvIHRoZSBsaXN0XG4gICAgdmFyIG1vdmllVGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUudGl0bGVzLmluZGV4T2YobW92aWVUaXRsZSkgPT09IC0xKSB7XG4gICAgICB2YXIgbmV3VGl0bGVzID0gdGhpcy5zdGF0ZS50aXRsZXM7XG4gICAgICB0aGlzLnF1ZXJ5TW92aWUobW92aWVUaXRsZSk7XG4gICAgICBuZXdUaXRsZXMucHVzaChtb3ZpZVRpdGxlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0aXRsZXM6IG5ld1RpdGxlcyxcbiAgICAgICAgdGl0bGU6ICcnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBxdWVyeU1vdmllKG1vdmllVGl0bGUpIHtcbiAgICAvLyBhZGQgbW92aWUgdG8gZGF0YWJhc2VcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL21vdmllcy9zZWFyY2gnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICBtb3ZpZTogbW92aWVUaXRsZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXNwbGF5OiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBxdWVyeWluZyBmb3IgbW92aWU6ICcsIGVycik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBsb2dvdXQoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9sb2dvdXQnLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBsb2dnaW5nIG91dDogJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBpZD0nbG9nb3V0JyBvbkNsaWNrPXt0aGlzLmxvZ291dC5iaW5kKHRoaXMpfT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBpZD0nbW92aWVMaXN0Jz5cbiAgICAgICAgICA8aDQ+RW50ZXIgYSBtb3ZpZSB0aXRsZTo8L2g0PlxuICAgICAgICAgIDxJbnB1dCB0ZXh0PXt0aGlzLnN0YXRlLnRpdGxlfSB0aXRsZUNoYW5nZT17dGhpcy5zZXRUaXRsZVN0YXRlLmJpbmQodGhpcyl9IGFkZFRvVGl0bGVzPXt0aGlzLmFkZFRpdGxlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8VGFibGUgdGl0bGVzPXt0aGlzLnN0YXRlLnRpdGxlc30vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPSdtb3ZpZUluZm8nPlxuICAgICAgICAgIDxEaXNwbGF5IGluZm89e3RoaXMuc3RhdGUuZGlzcGxheX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==