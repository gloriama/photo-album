window.Gallery = (props) => (
  <div>
    <p>{props.title}</p>
    {props.photos.map((photo) => (
      <div key={photo.title}>
        <p>{photo.title}</p>
        <img src={photo.url} width="400" />
      </div>
    ))}
  </div>
);