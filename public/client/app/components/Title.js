'use strict';

var Title = function Title(props) {
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      { className: 'titles', onClick: function onClick(e) {
          e.preventDefault();
          props.deleteTableData(props.title);
        } },
      props.title
    )
  );
};

window.Title = Title;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvVGl0bGUuanN4Il0sIm5hbWVzIjpbIlRpdGxlIiwicHJvcHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJkZWxldGVUYWJsZURhdGEiLCJ0aXRsZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUksV0FBVSxRQUFkLEVBQXVCLFNBQVMsaUJBQUNDLENBQUQsRUFBTztBQUNyQ0EsWUFBRUMsY0FBRjtBQUNBRixnQkFBTUcsZUFBTixDQUFzQkgsTUFBTUksS0FBNUI7QUFDRCxTQUhEO0FBSUdKLFlBQU1JO0FBSlQ7QUFERixHQURVO0FBQUEsQ0FBWjs7QUFXQUMsT0FBT04sS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6IlRpdGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRpdGxlID0gKHByb3BzKSA9PiAoXG4gIDx0cj5cbiAgICA8dGQgY2xhc3NOYW1lPSd0aXRsZXMnIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwcm9wcy5kZWxldGVUYWJsZURhdGEocHJvcHMudGl0bGUpO1xuICAgIH19PlxuICAgICAge3Byb3BzLnRpdGxlfVxuICAgIDwvdGQ+XG4gIDwvdHI+XG4pXG5cbndpbmRvdy5UaXRsZSA9IFRpdGxlOyJdfQ==