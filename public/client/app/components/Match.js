'use strict';

var Match = function Match(props) {
  return React.createElement(
    'div',
    { className: 'match', onClick: props.toggle },
    React.createElement(
      'p',
      null,
      'You\'ve matched with'
    ),
    React.createElement(
      'h4',
      null,
      props.details.name,
      '!'
    ),
    React.createElement('img', { className: 'matchImage', src: props.details.image }),
    React.createElement(
      'button',
      { onClick: props.message },
      'Send a message!'
    )
  );
};

window.Match = Match;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvTWF0Y2guanN4Il0sIm5hbWVzIjpbIk1hdGNoIiwicHJvcHMiLCJ0b2dnbGUiLCJkZXRhaWxzIiwibmFtZSIsImltYWdlIiwibWVzc2FnZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1Y7QUFBQTtBQUFBLE1BQUssV0FBVSxPQUFmLEVBQXVCLFNBQVNBLE1BQU1DLE1BQXRDO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtELFlBQU1FLE9BQU4sQ0FBY0MsSUFBbkI7QUFBQTtBQUFBLEtBRkY7QUFHRSxpQ0FBSyxXQUFVLFlBQWYsRUFBNEIsS0FBS0gsTUFBTUUsT0FBTixDQUFjRSxLQUEvQyxHQUhGO0FBSUU7QUFBQTtBQUFBLFFBQVEsU0FBU0osTUFBTUssT0FBdkI7QUFBQTtBQUFBO0FBSkYsR0FEVTtBQUFBLENBQVo7O0FBU0FDLE9BQU9QLEtBQVAsR0FBZUEsS0FBZiIsImZpbGUiOiJNYXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNYXRjaCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nbWF0Y2gnIG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZX0+XG4gICAgPHA+WW91J3ZlIG1hdGNoZWQgd2l0aDwvcD5cbiAgICA8aDQ+e3Byb3BzLmRldGFpbHMubmFtZX0hPC9oND5cbiAgICA8aW1nIGNsYXNzTmFtZT0nbWF0Y2hJbWFnZScgc3JjPXtwcm9wcy5kZXRhaWxzLmltYWdlfS8+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5tZXNzYWdlfT5TZW5kIGEgbWVzc2FnZSE8L2J1dHRvbj5cbiAgPC9kaXY+XG4pXG5cbndpbmRvdy5NYXRjaCA9IE1hdGNoOyJdfQ==