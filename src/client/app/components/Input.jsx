var Input = (props) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    props.addToTitles();
  }}>
    <input value={props.text} onChange={(e) => {
      e.preventDefault();
      props.titleChange(e.target.value);
    }}/>
    <input type='submit'/>
  </form>
)

window.Input = Input;