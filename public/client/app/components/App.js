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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGl0bGVzIiwidGl0bGUiLCJkaXNwbGF5IiwiaW1nIiwidmFsIiwic2V0U3RhdGUiLCJtb3ZpZVRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibmV3VGl0bGVzIiwicXVlcnlNb3ZpZSIsInB1c2giLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsIm1vdmllIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImVyciIsInNldFRpdGxlU3RhdGUiLCJiaW5kIiwiYWRkVGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBREc7QUFFWEMsYUFBTyxFQUZJO0FBR1hDLGVBQVM7QUFDUEMsYUFBSztBQURFO0FBSEUsS0FBYjtBQUZpQjtBQVNsQjs7OztrQ0FDYUMsRyxFQUFLO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSixPQUFPRyxHQUFSLEVBQWQ7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7K0JBQ1c7QUFDVDtBQUNBLFVBQUlFLGFBQWEsS0FBS1AsS0FBTCxDQUFXRSxLQUFYLENBQWlCTSxXQUFqQixFQUFqQjtBQUNBLFVBQUksS0FBS1IsS0FBTCxDQUFXQyxNQUFYLENBQWtCUSxPQUFsQixDQUEwQkYsVUFBMUIsTUFBMEMsQ0FBQyxDQUEvQyxFQUFrRDtBQUNoRCxZQUFJRyxZQUFZLEtBQUtWLEtBQUwsQ0FBV0MsTUFBM0I7QUFDQSxhQUFLVSxVQUFMLENBQWdCSixVQUFoQjtBQUNBRyxrQkFBVUUsSUFBVixDQUFlTCxVQUFmO0FBQ0EsYUFBS0QsUUFBTCxDQUFjO0FBQ1pMLGtCQUFRUyxTQURJO0FBRVpSLGlCQUFPO0FBRkssU0FBZDtBQUlEO0FBQ0Y7OzsrQkFDVUssVSxFQUFZO0FBQUE7O0FBQ3JCO0FBQ0FNLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGdCQURBO0FBRUxDLGdCQUFRLE1BRkg7QUFHTEMsa0JBQVUsTUFITDtBQUlMQyxjQUFNO0FBQ0pDLGlCQUFPWjtBQURILFNBSkQ7QUFPTGEsaUJBQVMsaUJBQUNGLElBQUQsRUFBVTtBQUNqQkcsa0JBQVFDLEdBQVIsQ0FBWUosSUFBWjtBQUNBLGlCQUFLWixRQUFMLENBQWM7QUFDWkgscUJBQVNlO0FBREcsV0FBZDtBQUdELFNBWkk7QUFhTEssZUFBTyxlQUFDQyxHQUFELEVBQVM7QUFDZEgsa0JBQVFDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ0UsR0FBMUM7QUFDRDtBQWZJLE9BQVA7QUFpQkQ7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsSUFBRyxRQUFOLEVBQWUsTUFBSyxTQUFwQjtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLElBQUcsV0FBUjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLDhCQUFDLEtBQUQsSUFBTyxNQUFNLEtBQUt4QixLQUFMLENBQVdFLEtBQXhCLEVBQStCLGFBQWEsS0FBS3VCLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQTVDLEVBQTJFLGFBQWEsS0FBS0MsUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQXhGLEdBRkY7QUFHRSw4QkFBQyxLQUFELElBQU8sUUFBUSxLQUFLMUIsS0FBTCxDQUFXQyxNQUExQjtBQUhGLFNBRkY7QUFRRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFdBQVI7QUFDRSw4QkFBQyxPQUFELElBQVMsTUFBTSxLQUFLRCxLQUFMLENBQVdHLE9BQTFCO0FBREY7QUFSRixPQURGO0FBY0Q7Ozs7RUFuRWV5QixNQUFNQyxTOztBQXNFeEJDLE9BQU9oQyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlczogW10sXG4gICAgICB0aXRsZTogJycsXG4gICAgICBkaXNwbGF5OiB7XG4gICAgICAgIGltZzogJ2h0dHA6Ly9jZG4xLXd3dy5jb21pbmdzb29uLm5ldC9hc3NldHMvdXBsb2Fkcy8yMDE2LzA1L3JvYmlud2lsbGlhbXMuanBnJyxcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHNldFRpdGxlU3RhdGUodmFsKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGl0bGU6IHZhbH0pO1xuICB9XG4gIC8vIHJlbW92ZUl0ZW0odGl0bGUpIHtcbiAgLy8gICB2YXIgbmV3VGl0bGVzID0gdGhpcy5zdGF0ZS50aXRsZXM7XG4gIC8vICAgbmV3VGl0bGVzLnNwbGljZShuZXdUaXRsZXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7dGl0bGVzOiBuZXdUaXRsZXN9KVxuICAvLyB9XG4gIGFkZFRpdGxlKCkge1xuICAgIC8vIGFkZHMgdGl0bGUgdG8gdGhlIGxpc3RcbiAgICB2YXIgbW92aWVUaXRsZSA9IHRoaXMuc3RhdGUudGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS50aXRsZXMuaW5kZXhPZihtb3ZpZVRpdGxlKSA9PT0gLTEpIHtcbiAgICAgIHZhciBuZXdUaXRsZXMgPSB0aGlzLnN0YXRlLnRpdGxlcztcbiAgICAgIHRoaXMucXVlcnlNb3ZpZShtb3ZpZVRpdGxlKTtcbiAgICAgIG5ld1RpdGxlcy5wdXNoKG1vdmllVGl0bGUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRpdGxlczogbmV3VGl0bGVzLFxuICAgICAgICB0aXRsZTogJydcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHF1ZXJ5TW92aWUobW92aWVUaXRsZSkge1xuICAgIC8vIGFkZCBtb3ZpZSB0byBkYXRhYmFzZVxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvbW92aWVzL3NlYXJjaCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1vdmllOiBtb3ZpZVRpdGxlXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpc3BsYXk6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIHF1ZXJ5aW5nIGZvciBtb3ZpZTogJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaWQ9J2xvZ291dCcgaHJlZj0nL2xvZ291dCc+TG9nb3V0PC9hPlxuICAgICAgICA8ZGl2IGlkPSdtb3ZpZUxpc3QnPlxuICAgICAgICAgIDxoND5FbnRlciBhIG1vdmllIHRpdGxlOjwvaDQ+XG4gICAgICAgICAgPElucHV0IHRleHQ9e3RoaXMuc3RhdGUudGl0bGV9IHRpdGxlQ2hhbmdlPXt0aGlzLnNldFRpdGxlU3RhdGUuYmluZCh0aGlzKX0gYWRkVG9UaXRsZXM9e3RoaXMuYWRkVGl0bGUuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDxUYWJsZSB0aXRsZXM9e3RoaXMuc3RhdGUudGl0bGVzfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9J21vdmllSW5mbyc+XG4gICAgICAgICAgPERpc3BsYXkgaW5mbz17dGhpcy5zdGF0ZS5kaXNwbGF5fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19