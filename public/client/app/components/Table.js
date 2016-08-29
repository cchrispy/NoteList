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
        return React.createElement(Title, { title: title, key: i, deleteTableData: props.deleteElementFromTable });
      })
    )
  );
};

window.Table = Table;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvVGFibGUuanN4Il0sIm5hbWVzIjpbIlRhYmxlIiwicHJvcHMiLCJ0aXRsZXMiLCJtYXAiLCJ0aXRsZSIsImkiLCJkZWxldGVFbGVtZW50RnJvbVRhYmxlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsU0FDVjtBQUFBO0FBQUEsTUFBTyxJQUFHLE9BQVY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLGFBQWQ7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlHQSxZQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSO0FBQUEsZUFDaEIsb0JBQUMsS0FBRCxJQUFPLE9BQU9ELEtBQWQsRUFBcUIsS0FBS0MsQ0FBMUIsRUFBNkIsaUJBQWlCSixNQUFNSyxzQkFBcEQsR0FEZ0I7QUFBQSxPQUFqQjtBQUpIO0FBREYsR0FEVTtBQUFBLENBQVo7O0FBYUFDLE9BQU9QLEtBQVAsR0FBZUEsS0FBZiIsImZpbGUiOiJUYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBUYWJsZSA9IChwcm9wcykgPT4gKFxuICA8dGFibGUgaWQ9J3RhYmxlJz5cbiAgICA8dGJvZHk+XG4gICAgICA8dHI+XG4gICAgICAgIDx0aCBjbGFzc05hbWU9J3RhYmxlSGVhZGVyJz5Nb3ZpZXM8L3RoPlxuICAgICAgPC90cj5cbiAgICAgIHtwcm9wcy50aXRsZXMubWFwKCh0aXRsZSwgaSkgPT4gKFxuICAgICAgICA8VGl0bGUgdGl0bGU9e3RpdGxlfSBrZXk9e2l9IGRlbGV0ZVRhYmxlRGF0YT17cHJvcHMuZGVsZXRlRWxlbWVudEZyb21UYWJsZX0vPlxuICAgICAgKSl9XG4gICAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuKVxuXG53aW5kb3cuVGFibGUgPSBUYWJsZTsiXX0=