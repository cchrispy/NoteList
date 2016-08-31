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
    React.createElement('img', { className: 'matchImage', src: props.details.image })
  );
};

window.Match = Match;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvTWF0Y2guanN4Il0sIm5hbWVzIjpbIk1hdGNoIiwicHJvcHMiLCJ0b2dnbGUiLCJkZXRhaWxzIiwibmFtZSIsImltYWdlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsU0FDVjtBQUFBO0FBQUEsTUFBSyxXQUFVLE9BQWYsRUFBdUIsU0FBU0EsTUFBTUMsTUFBdEM7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0QsWUFBTUUsT0FBTixDQUFjQyxJQUFuQjtBQUFBO0FBQUEsS0FGRjtBQUdFLGlDQUFLLFdBQVUsWUFBZixFQUE0QixLQUFLSCxNQUFNRSxPQUFOLENBQWNFLEtBQS9DO0FBSEYsR0FEVTtBQUFBLENBQVo7O0FBUUFDLE9BQU9OLEtBQVAsR0FBZUEsS0FBZiIsImZpbGUiOiJNYXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNYXRjaCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nbWF0Y2gnIG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZX0+XG4gICAgPHA+WW91J3ZlIG1hdGNoZWQgd2l0aDwvcD5cbiAgICA8aDQ+e3Byb3BzLmRldGFpbHMubmFtZX0hPC9oND5cbiAgICA8aW1nIGNsYXNzTmFtZT0nbWF0Y2hJbWFnZScgc3JjPXtwcm9wcy5kZXRhaWxzLmltYWdlfS8+XG4gIDwvZGl2PlxuKVxuXG53aW5kb3cuTWF0Y2ggPSBNYXRjaDsiXX0=