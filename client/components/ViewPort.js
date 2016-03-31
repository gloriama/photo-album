window.ViewPort = (props) => (
  <div>
    <p>{props.photo.title}</p>
    <img src={props.photo.url} width="400" />
    <p>Rating: {props.photo.rating}</p>
  </div>
);