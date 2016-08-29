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
      console.log(val);
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
      var newTitles = this.state.titles;
      newTitles.push(this.state.title);
      this.setState({
        titles: newTitles,
        title: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h4',
          null,
          'Enter a movie title:'
        ),
        React.createElement(Input, { text: this.state.title, titleChange: this.setTitleState.bind(this), addToTitles: this.addTitle.bind(this) }),
        React.createElement(Table, { titles: this.state.titles, deleteElementFromTable: this.removeItem.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJuZXdUaXRsZXMiLCJwdXNoIiwic2V0VGl0bGVTdGF0ZSIsImJpbmQiLCJhZGRUaXRsZSIsInJlbW92ZUl0ZW0iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBREc7QUFFWEMsYUFBTztBQUZJLEtBQWI7QUFGaUI7QUFNbEI7Ozs7a0NBQ2FDLEcsRUFBSztBQUNqQkMsY0FBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0EsV0FBS0csUUFBTCxDQUFjLEVBQUNKLE9BQU9DLEdBQVIsRUFBZDtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsrQkFDVztBQUNULFVBQUlJLFlBQVksS0FBS1AsS0FBTCxDQUFXQyxNQUEzQjtBQUNBTSxnQkFBVUMsSUFBVixDQUFlLEtBQUtSLEtBQUwsQ0FBV0UsS0FBMUI7QUFDQSxXQUFLSSxRQUFMLENBQWM7QUFDWkwsZ0JBQVFNLFNBREk7QUFFWkwsZUFBTztBQUZLLE9BQWQ7QUFJRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSw0QkFBQyxLQUFELElBQU8sTUFBTSxLQUFLRixLQUFMLENBQVdFLEtBQXhCLEVBQStCLGFBQWEsS0FBS08sYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBNUMsRUFBMkUsYUFBYSxLQUFLQyxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBeEYsR0FGRjtBQUdFLDRCQUFDLEtBQUQsSUFBTyxRQUFRLEtBQUtWLEtBQUwsQ0FBV0MsTUFBMUIsRUFBa0Msd0JBQXdCLEtBQUtXLFVBQUwsQ0FBZ0JGLElBQWhCLENBQXFCLElBQXJCLENBQTFEO0FBSEYsT0FERjtBQU9EOzs7O0VBakNlRyxNQUFNQyxTOztBQW9DeEJDLE9BQU9qQixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlczogW10sXG4gICAgICB0aXRsZTogJydcbiAgICB9O1xuICB9XG4gIHNldFRpdGxlU3RhdGUodmFsKSB7XG4gICAgY29uc29sZS5sb2codmFsKTtcbiAgICB0aGlzLnNldFN0YXRlKHt0aXRsZTogdmFsfSk7XG4gIH1cbiAgLy8gcmVtb3ZlSXRlbSh0aXRsZSkge1xuICAvLyAgIHZhciBuZXdUaXRsZXMgPSB0aGlzLnN0YXRlLnRpdGxlcztcbiAgLy8gICBuZXdUaXRsZXMuc3BsaWNlKG5ld1RpdGxlcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgLy8gICB0aGlzLnNldFN0YXRlKHt0aXRsZXM6IG5ld1RpdGxlc30pXG4gIC8vIH1cbiAgYWRkVGl0bGUoKSB7XG4gICAgdmFyIG5ld1RpdGxlcyA9IHRoaXMuc3RhdGUudGl0bGVzO1xuICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuc3RhdGUudGl0bGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGl0bGVzOiBuZXdUaXRsZXMsXG4gICAgICB0aXRsZTogJydcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGg0PkVudGVyIGEgbW92aWUgdGl0bGU6PC9oND5cbiAgICAgICAgPElucHV0IHRleHQ9e3RoaXMuc3RhdGUudGl0bGV9IHRpdGxlQ2hhbmdlPXt0aGlzLnNldFRpdGxlU3RhdGUuYmluZCh0aGlzKX0gYWRkVG9UaXRsZXM9e3RoaXMuYWRkVGl0bGUuYmluZCh0aGlzKX0vPlxuICAgICAgICA8VGFibGUgdGl0bGVzPXt0aGlzLnN0YXRlLnRpdGxlc30gZGVsZXRlRWxlbWVudEZyb21UYWJsZT17dGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==