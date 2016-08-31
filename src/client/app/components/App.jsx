class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      title: '',
      match: '',
      profile: 'https://s-media-cache-ak0.pinimg.com/564x/9a/26/84/9a2684c4213171476e13732af3b26537.jpg',
      display: {},
      img: 'https://www.offerpop.com/wp-content/uploads/2014/08/Movies.jpg',
      userMatch: {
        show: false,
        name: '',
        image: ''
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
          this.setState({
            userMatch: {
              show: true,
              name: data.username,
              image: data.picture
            }
          })
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
    // add movie to database and checks for matches
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
          match: data.matches[0] ? data.matches[0].username : '',
          display: data.movie,
          img: tempImages[Math.floor(Math.random() * tempImages.length)]
        });
      },
      error: (err) => {
        console.log('Error querying for movie: ', err);
      }
    })
  }
  toggleMatch() {
    this.setState({
      userMatch: {
        show: false
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
          <Display info={this.state.img}/>
        </div>

        <div id='matchBox'>
          {this.state.userMatch.show ? <Match details={this.state.userMatch} toggle={this.toggleMatch.bind(this)}/> : null}
        </div>
      </div>
    )
  }
}

var tempImages = [
'https://s-media-cache-ak0.pinimg.com/736x/34/5a/0d/345a0d25e5968310a091adbe5955263a.jpg',
'http://www.hollywoodreporter.com/sites/default/files/custom/Blog_Images/avengers-movie-poster-1.jpg',
'http://www.impawards.com/2010/posters/inception_ver3.jpg',
'http://www.wbaltv.com/image/view/-/165568/highRes/2/-/i2c4at/-/Harry-Potter-Sorcerer-s-Stone-poster-jpg.jpg',
'https://www.movieposter.com/posters/archive/main/32/MPW-16415',
'http://www.welcomeamerica.com/wp-content/uploads/2016/04/nemo.jpg',
'http://cdn1-www.comingsoon.net/assets/uploads/2016/05/robinwilliams.jpg',
'http://contentmarketinginstitute.com/wp-content/uploads/2015/08/original-jaws-poster-image-1A.png',
'http://graphicdesignjunction.com/wp-content/uploads/2012/10/movie+posters+16.jpg',
'https://speckycdn-sdm.netdna-ssl.com/wp-content/uploads/2009/08/movieposter29.jpg'
]

window.App = App;