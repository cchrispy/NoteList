"use strict";

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
      img: props.img,
      title: null,
      rating: null
    };
    return _this;
  }

  _createClass(Display, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Picture, { src: this.props.info.img })
      );
    }
  }]);

  return Display;
}(React.Component);

window.Display = Display;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvRGlzcGxheS5qc3giXSwibmFtZXMiOlsiRGlzcGxheSIsInByb3BzIiwic3RhdGUiLCJpbWciLCJ0aXRsZSIsInJhdGluZyIsImluZm8iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBS0YsTUFBTUUsR0FEQTtBQUVYQyxhQUFPLElBRkk7QUFHWEMsY0FBUTtBQUhHLEtBQWI7QUFGaUI7QUFPbEI7Ozs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLE9BQUQsSUFBUyxLQUFLLEtBQUtKLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkgsR0FBOUI7QUFERixPQURGO0FBS0Q7Ozs7RUFmbUJJLE1BQU1DLFM7O0FBa0I1QkMsT0FBT1QsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiRGlzcGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERpc3BsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW1nOiBwcm9wcy5pbWcsXG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIHJhdGluZzogbnVsbFxuICAgIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UGljdHVyZSBzcmM9e3RoaXMucHJvcHMuaW5mby5pbWd9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuRGlzcGxheSA9IERpc3BsYXk7Il19