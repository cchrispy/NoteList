"use strict";

var Picture = function Picture(props) {
  return React.createElement(
    "div",
    null,
    React.createElement("img", { src: props.src })
  );
};

window.Picture = Picture;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvUGljdHVyZS5qc3giXSwibmFtZXMiOlsiUGljdHVyZSIsInByb3BzIiwic3JjIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxLQUFEO0FBQUEsU0FDWjtBQUFBO0FBQUE7QUFDRSxpQ0FBSyxLQUFLQSxNQUFNQyxHQUFoQjtBQURGLEdBRFk7QUFBQSxDQUFkOztBQU1BQyxPQUFPSCxPQUFQLEdBQWlCQSxPQUFqQiIsImZpbGUiOiJQaWN0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBpY3R1cmUgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8aW1nIHNyYz17cHJvcHMuc3JjfS8+XG4gIDwvZGl2PlxuKVxuXG53aW5kb3cuUGljdHVyZSA9IFBpY3R1cmU7Il19