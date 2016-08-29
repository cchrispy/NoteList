class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      title: ''
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
          <Display />
        </div>
      </div>
    )
  }
}

window.App = App;