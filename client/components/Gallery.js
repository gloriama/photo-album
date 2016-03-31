window.Gallery = (props) => (
  <table>
    <thead>
      {props.title}
    </thead>
    <tbody>
      {props.photos.map((photo) => <GalleryItem key={photo.title} photo={photo} />)}
    </tbody>
  </table>
);