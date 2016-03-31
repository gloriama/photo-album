window.ViewPort = (props) => (
  <div>
    <p>{props.photo.title}</p>
    <img src={props.photo.url} width="400" />
    <p>Rating: {props.photo.rating}</p>
    <select onChange={(e) => props.updateRating(e.target.value)}>
      <option value="-1">-1</option>
      <option value="0">0</option>
      <option value="1">1</option>
    </select>
  </div>
);