'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Display = function (_React$Component) {
  _inherits(Display, _React$Component);

  function Display(props) {
    _classCallCheck(this, Display);

    var _this = _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));

    _this.state = {
      img: 'http://cdn1-www.comingsoon.net/assets/uploads/2016/05/robinwilliams.jpg',
      title: null,
      rating: null
    };
    return _this;
  }

  _createClass(Display, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Picture, { src: this.state.img })
      );
    }
  }]);

  return Display;
}(React.Component);

window.Display = Display;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvRGlzcGxheS5qc3giXSwibmFtZXMiOlsiRGlzcGxheSIsInByb3BzIiwic3RhdGUiLCJpbWciLCJ0aXRsZSIsInJhdGluZyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE87OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLLHlFQURNO0FBRVhDLGFBQU8sSUFGSTtBQUdYQyxjQUFRO0FBSEcsS0FBYjtBQUZpQjtBQU9sQjs7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsT0FBRCxJQUFTLEtBQUssS0FBS0gsS0FBTCxDQUFXQyxHQUF6QjtBQURGLE9BREY7QUFLRDs7OztFQWZtQkcsTUFBTUMsUzs7QUFrQjVCQyxPQUFPUixPQUFQLEdBQWlCQSxPQUFqQiIsImZpbGUiOiJEaXNwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbWc6ICdodHRwOi8vY2RuMS13d3cuY29taW5nc29vbi5uZXQvYXNzZXRzL3VwbG9hZHMvMjAxNi8wNS9yb2JpbndpbGxpYW1zLmpwZycsXG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIHJhdGluZzogbnVsbFxuICAgIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UGljdHVyZSBzcmM9e3RoaXMuc3RhdGUuaW1nfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkRpc3BsYXkgPSBEaXNwbGF5OyJdfQ==