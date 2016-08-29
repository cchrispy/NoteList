class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 'http://cdn1-www.comingsoon.net/assets/uploads/2016/05/robinwilliams.jpg',
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