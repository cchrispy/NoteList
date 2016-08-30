class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.img,
      title: null,
      rating: null
    };
  }
  render() {
    return (
      <div>
        <Picture src={this.state.img}/>
      </div>
    )
  }
}

window.Display = Display;