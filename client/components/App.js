class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: initialPhotos, // from data/initialPhotos.js
      currentPhoto: initialPhotos[0]
    }
  }

  render() {
    return (
      <div>
        <p>Photo Album</p>
        <Selector photos={this.state.photos} />
        <ViewPort photo={this.state.currentPhoto} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));