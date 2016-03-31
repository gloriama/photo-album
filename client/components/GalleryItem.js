window.GalleryItem = (props) => (
  <tr>
    <td>{props.photo.title}</td>
    <td><img src={props.photo.url} width="400" /></td>
  </tr>
);