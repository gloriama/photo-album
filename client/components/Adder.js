class Adder extends React.Component {
  constructor(props) {
    super(props);
  }

  getTitle() {
    return document.getElementById('title').value;
  }

  getURL() {
    return document.getElementById('url').value;
  }

  render() {
    return (
      <div>
        <input id="title" type="text" placeholder="Title" />
        <input id="url" type="text" placeholder="URL" />
        <input type="Submit" text="Submit" onClick={() =>
          this.props.addPhoto(this.getTitle(), this.getURL())
        } />
      </div>
    );
  }
}

window.Adder = Adder;