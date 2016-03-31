window.SelectorItem = (props) => (
  <tr>
    <td onClick={props.onClick}>{props.photo.title}</td>
  </tr>
);