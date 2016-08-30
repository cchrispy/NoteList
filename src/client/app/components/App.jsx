class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      title: '',
      match: '',
      profile: 'https://s-media-cache-ak0.pinimg.com/564x/9a/26/84/9a2684c4213171476e13732af3b26537.jpg',
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
        console.log('Fetching movies: ', data.movies);
        this.setState({
          titles: data.movies.map(movie => {
            return movie.title;
          }),
          profile: data.picture
        })
      },
      error: (err) => {
        console.log('Error fetching movies: ', err);
      }
    })
  }
  componentDidUpdate(_prevProps, prevState) {
    // renders a match onto the page
    if (prevState.match !== this.state.match) {
      console.log(this.state.match);
      var match = this.state.match;
      $.ajax({
        url: '/users',
        method: 'POST',
        dataType: 'json',
        data: {
          match: match
        },
        success: (data) => {
          console.log('Match data: ', data);

        },
        error: (err) => {
          console.log('Error searching for match: ', err);
        }
      })
    }
  }
  setTitleState(val) {
    this.setState({title: val});
  }
  addTitle() {
    // adds title to the list and checks for matches
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
        console.log('Movie: ', data);
        this.setState({
          match: data.matches[0].username || '',
          display: data.movie
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
        <img id='profile' src={this.state.profile} />
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