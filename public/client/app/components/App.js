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
      title: ''
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
      // add movie to database
      $.ajax({
        url: '/movies/search',
        method: 'POST',
        dataType: 'json',
        data: {
          movie: movieTitle
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
          React.createElement(Display, null)
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJ2YWwiLCJzZXRTdGF0ZSIsInF1ZXJ5TW92aWUiLCJuZXdUaXRsZXMiLCJwdXNoIiwibW92aWVUaXRsZSIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJkYXRhIiwibW92aWUiLCJzZXRUaXRsZVN0YXRlIiwiYmluZCIsImFkZFRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQURHO0FBRVhDLGFBQU87QUFGSSxLQUFiO0FBRmlCO0FBTWxCOzs7O2tDQUNhQyxHLEVBQUs7QUFDakIsV0FBS0MsUUFBTCxDQUFjLEVBQUNGLE9BQU9DLEdBQVIsRUFBZDtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsrQkFDVztBQUNULFdBQUtFLFVBQUwsQ0FBZ0IsS0FBS0wsS0FBTCxDQUFXRSxLQUEzQjtBQUNBLFVBQUlJLFlBQVksS0FBS04sS0FBTCxDQUFXQyxNQUEzQjtBQUNBSyxnQkFBVUMsSUFBVixDQUFlLEtBQUtQLEtBQUwsQ0FBV0UsS0FBMUI7QUFDQSxXQUFLRSxRQUFMLENBQWM7QUFDWkgsZ0JBQVFLLFNBREk7QUFFWkosZUFBTztBQUZLLE9BQWQ7QUFJRDs7OytCQUNVTSxVLEVBQVk7QUFDckI7QUFDQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssZ0JBREE7QUFFTEMsZ0JBQVEsTUFGSDtBQUdMQyxrQkFBVSxNQUhMO0FBSUxDLGNBQU07QUFDSkMsaUJBQU9QO0FBREg7QUFKRCxPQUFQO0FBUUQ7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsS0FBRCxJQUFPLE1BQU0sS0FBS1IsS0FBTCxDQUFXRSxLQUF4QixFQUErQixhQUFhLEtBQUtjLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQTVDLEVBQTJFLGFBQWEsS0FBS0MsUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQXhGLEdBRkY7QUFHRSw4QkFBQyxLQUFELElBQU8sUUFBUSxLQUFLakIsS0FBTCxDQUFXQyxNQUExQjtBQUhGLFNBRkY7QUFRRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFdBQVI7QUFDRSw4QkFBQyxPQUFEO0FBREY7QUFSRixPQURGO0FBY0Q7Ozs7RUFuRGVrQixNQUFNQyxTOztBQXNEeEJDLE9BQU92QixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlczogW10sXG4gICAgICB0aXRsZTogJydcbiAgICB9O1xuICB9XG4gIHNldFRpdGxlU3RhdGUodmFsKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGl0bGU6IHZhbH0pO1xuICB9XG4gIC8vIHJlbW92ZUl0ZW0odGl0bGUpIHtcbiAgLy8gICB2YXIgbmV3VGl0bGVzID0gdGhpcy5zdGF0ZS50aXRsZXM7XG4gIC8vICAgbmV3VGl0bGVzLnNwbGljZShuZXdUaXRsZXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7dGl0bGVzOiBuZXdUaXRsZXN9KVxuICAvLyB9XG4gIGFkZFRpdGxlKCkge1xuICAgIHRoaXMucXVlcnlNb3ZpZSh0aGlzLnN0YXRlLnRpdGxlKTtcbiAgICB2YXIgbmV3VGl0bGVzID0gdGhpcy5zdGF0ZS50aXRsZXM7XG4gICAgbmV3VGl0bGVzLnB1c2godGhpcy5zdGF0ZS50aXRsZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aXRsZXM6IG5ld1RpdGxlcyxcbiAgICAgIHRpdGxlOiAnJ1xuICAgIH0pXG4gIH1cbiAgcXVlcnlNb3ZpZShtb3ZpZVRpdGxlKSB7XG4gICAgLy8gYWRkIG1vdmllIHRvIGRhdGFiYXNlXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9tb3ZpZXMvc2VhcmNoJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbW92aWU6IG1vdmllVGl0bGVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cblxuICAgICAgICA8ZGl2IGlkPSdtb3ZpZUxpc3QnPlxuICAgICAgICAgIDxoND5FbnRlciBhIG1vdmllIHRpdGxlOjwvaDQ+XG4gICAgICAgICAgPElucHV0IHRleHQ9e3RoaXMuc3RhdGUudGl0bGV9IHRpdGxlQ2hhbmdlPXt0aGlzLnNldFRpdGxlU3RhdGUuYmluZCh0aGlzKX0gYWRkVG9UaXRsZXM9e3RoaXMuYWRkVGl0bGUuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDxUYWJsZSB0aXRsZXM9e3RoaXMuc3RhdGUudGl0bGVzfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9J21vdmllSW5mbyc+XG4gICAgICAgICAgPERpc3BsYXkgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=