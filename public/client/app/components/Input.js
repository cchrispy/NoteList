'use strict';

var Input = function Input(props) {
  return React.createElement(
    'form',
    { onSubmit: function onSubmit(e) {
        e.preventDefault();
        props.addToTitles();
      } },
    React.createElement('input', { value: props.text, onChange: function onChange(e) {
        e.preventDefault();
        props.titleChange(e.target.value);
      } }),
    React.createElement('input', { type: 'submit' })
  );
};

window.Input = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvSW5wdXQuanN4Il0sIm5hbWVzIjpbIklucHV0IiwicHJvcHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRUb1RpdGxlcyIsInRleHQiLCJ0aXRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsU0FDVjtBQUFBO0FBQUEsTUFBTSxVQUFVLGtCQUFDQyxDQUFELEVBQU87QUFDckJBLFVBQUVDLGNBQUY7QUFDQUYsY0FBTUcsV0FBTjtBQUNELE9BSEQ7QUFJRSxtQ0FBTyxPQUFPSCxNQUFNSSxJQUFwQixFQUEwQixVQUFVLGtCQUFDSCxDQUFELEVBQU87QUFDekNBLFVBQUVDLGNBQUY7QUFDQUYsY0FBTUssV0FBTixDQUFrQkosRUFBRUssTUFBRixDQUFTQyxLQUEzQjtBQUNELE9BSEQsR0FKRjtBQVFFLG1DQUFPLE1BQUssUUFBWjtBQVJGLEdBRFU7QUFBQSxDQUFaOztBQWFBQyxPQUFPVCxLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW5wdXQgPSAocHJvcHMpID0+IChcbiAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb3BzLmFkZFRvVGl0bGVzKCk7XG4gIH19PlxuICAgIDxpbnB1dCB2YWx1ZT17cHJvcHMudGV4dH0gb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwcm9wcy50aXRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfX0vPlxuICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnLz5cbiAgPC9mb3JtPlxuKVxuXG53aW5kb3cuSW5wdXQgPSBJbnB1dDsiXX0=