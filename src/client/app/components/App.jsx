class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      title: '',
      display: {
        img: 'http://cdn1-www.comingsoon.net/assets/uploads/2016/05/robinwilliams.jpg',
      }
    };
  }
  componentWillMount() {
    // fetches user's movies
    $.ajax({
      url: '/movies/search',
      method: 'GET',
      success: (data) => {
        console.log('Fetching movies: ', data);
        this.setState({
          titles: data.map(movie => {
            return movie.title;
          })
        })
      },
      error: (err) => {
        console.log('Error fetching movies: ', err);
      }
    })
  }
  setTitleState(val) {
    this.setState({title: val});
  }
  addTitle() {
    // adds title to the list
    var movieTitle = this.state.title.toLowerCase();
    if (this.state.titles.indexOf(movieTitle) === -1) {
      var newTitles = this.state.titles;
      this.queryMovie(movieTitle);
      newTitles.push(movieTitle);
      this.setState({
        titles: newTitles,
        title: ''
      })
    }
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
          display: data
        });
      },
      error: (err) => {
        console.log('Error querying for movie: ', err);
      }
    })
  }
  render() {
    return (
      <div>
        <a id='logout' href='/logout'>Logout</a>
        <div id='movieList'>
          <h4>Enter a movie title:</h4>
          <Input text={this.state.title} titleChange={this.setTitleState.bind(this)} addToTitles={this.addTitle.bind(this)}/>
          <Table titles={this.state.titles}/>
        </div>

        <div id='movieInfo'>
          <Display info={this.state.display}/>
        </div>
      </div>
    )
  }
}

window.App = App;