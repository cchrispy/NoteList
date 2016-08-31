var Match = (props) => (
  <div className='match' onClick={props.toggle}>
    <p>You've matched with</p>
    <h4>{props.details.name}!</h4>
    <img className='matchImage' src={props.details.image}/>
    <button onClick={props.message}>Send a message!</button>
  </div>
)

window.Match = Match;