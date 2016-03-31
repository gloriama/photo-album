class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: initialPhotos // from data/initialPhotos.js
    }
  }

  render() {
    return (
      <div>
        <p>Photo Album</p>
        <Gallery title="Avatar: The Last Airbender" photos={this.state.photos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));