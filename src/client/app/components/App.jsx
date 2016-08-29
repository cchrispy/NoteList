class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      title: ''
    };
  }
  setTitleState(val) {
    console.log(val);
    this.setState({title: val});
  }
  // removeItem(title) {
  //   var newTitles = this.state.titles;
  //   newTitles.splice(newTitles.indexOf(item), 1);
  //   this.setState({titles: newTitles})
  // }
  addTitle() {
    var newTitles = this.state.titles;
    newTitles.push(this.state.title);
    this.setState({
      titles: newTitles,
      title: ''
    })
  }
  render() {
    return (
      <div>
        <h4>Enter a movie title:</h4>
        <Input text={this.state.title} titleChange={this.setTitleState.bind(this)} addToTitles={this.addTitle.bind(this)}/>
        <Table titles={this.state.titles} deleteElementFromTable={this.removeItem.bind(this)}/>
      </div>
    )
  }
}

window.App = App;