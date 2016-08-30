class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      title: '',
      img: 'http://cdn1-www.comingsoon.net/assets/uploads/2016/05/robinwilliams.jpg'
    };
  }
  setTitleState(val) {
    this.setState({title: val});
  }
  // removeItem(title) {
  //   var newTitles = this.state.titles;
  //   newTitles.splice(newTitles.indexOf(item), 1);
  //   this.setState({titles: newTitles})
  // }
  addTitle() {
    this.queryMovie(this.state.title);
    var newTitles = this.state.titles;
    newTitles.push(this.state.title);
    this.setState({
      titles: newTitles,
      title: ''
    })
  }
  queryMovie(movieTitle) {
    // add movie to database
    $.ajax({
      url: '/movies/search',
      method: 'POST',
      dataType: 'json',
      data: {
        movie: movieTitle
      },
      success: (data) => {
        console.log(data);
        this.setState({
          img: data.img
        })
      }
    })
  }
  render() {
    return (
      <div>

        <div id='movieList'>
          <h4>Enter a movie title:</h4>
          <Input text={this.state.title} titleChange={this.setTitleState.bind(this)} addToTitles={this.addTitle.bind(this)}/>
          <Table titles={this.state.titles}/>
        </div>

        <div id='movieInfo'>
          <Display img={this.state.img}/>
        </div>
      </div>
    )
  }
}

window.App = App;