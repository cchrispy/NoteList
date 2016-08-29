'use strict';

var Table = function Table(props) {
  return React.createElement(
    'table',
    { id: 'table' },
    React.createElement(
      'tbody',
      null,
      React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          { className: 'tableHeader' },
          'Movies'
        )
      ),
      props.titles.map(function (title, i) {
        return React.createElement(Title, { title: title, key: i });
      })
    )
  );
};

window.Table = Table;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvVGFibGUuanN4Il0sIm5hbWVzIjpbIlRhYmxlIiwicHJvcHMiLCJ0aXRsZXMiLCJtYXAiLCJ0aXRsZSIsImkiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUNWO0FBQUE7QUFBQSxNQUFPLElBQUcsT0FBVjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVUsYUFBZDtBQUFBO0FBQUE7QUFERixPQURGO0FBSUdBLFlBQU1DLE1BQU4sQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxlQUNoQixvQkFBQyxLQUFELElBQU8sT0FBT0QsS0FBZCxFQUFxQixLQUFLQyxDQUExQixHQURnQjtBQUFBLE9BQWpCO0FBSkg7QUFERixHQURVO0FBQUEsQ0FBWjs7QUFhQUMsT0FBT04sS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6IlRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRhYmxlID0gKHByb3BzKSA9PiAoXG4gIDx0YWJsZSBpZD0ndGFibGUnPlxuICAgIDx0Ym9keT5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRoIGNsYXNzTmFtZT0ndGFibGVIZWFkZXInPk1vdmllczwvdGg+XG4gICAgICA8L3RyPlxuICAgICAge3Byb3BzLnRpdGxlcy5tYXAoKHRpdGxlLCBpKSA9PiAoXG4gICAgICAgIDxUaXRsZSB0aXRsZT17dGl0bGV9IGtleT17aX0vPlxuICAgICAgKSl9XG4gICAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuKVxuXG53aW5kb3cuVGFibGUgPSBUYWJsZTsiXX0=