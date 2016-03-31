window.Selector = (props) => (
  <table>
    <thead>{props.title}</thead>
    <tbody>
      {props.photos.map((photo) => (
        <SelectorItem
          key={photo.title}
          photo={photo}
          onClick={() => props.setCurrentPhoto(photo)}
        />
      ))}
    </tbody>
  </table>
);