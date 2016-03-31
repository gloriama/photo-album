window.Selector = (props) => (
  <table>
    <thead>{props.title}</thead>
    <tbody>
      {props.photos.map((photo) => <tr key={photo.title}><td>{photo.title}</td></tr>)}
    </tbody>
  </table>
);