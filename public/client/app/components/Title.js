'use strict';

var Title = function Title(props) {
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      { className: 'titles', onClick: function onClick(e) {
          e.preventDefault();
        } },
      props.title
    )
  );
};

window.Title = Title;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvVGl0bGUuanN4Il0sIm5hbWVzIjpbIlRpdGxlIiwicHJvcHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUksV0FBVSxRQUFkLEVBQXVCLFNBQVMsaUJBQUNDLENBQUQsRUFBTztBQUNyQ0EsWUFBRUMsY0FBRjtBQUNELFNBRkQ7QUFHR0YsWUFBTUc7QUFIVDtBQURGLEdBRFU7QUFBQSxDQUFaOztBQVVBQyxPQUFPTCxLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoiVGl0bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVGl0bGUgPSAocHJvcHMpID0+IChcbiAgPHRyPlxuICAgIDx0ZCBjbGFzc05hbWU9J3RpdGxlcycgb25DbGljaz17KGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9fT5cbiAgICAgIHtwcm9wcy50aXRsZX1cbiAgICA8L3RkPlxuICA8L3RyPlxuKVxuXG53aW5kb3cuVGl0bGUgPSBUaXRsZTsiXX0=