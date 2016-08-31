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
      <div className='display'>
        <Picture src={this.props.info}/>
      </div>
    )
  }
}

window.Display = Display;