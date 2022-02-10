import propTypes from "prop-types";

const ImageGalleryItem = ({ largeImageURL, tags, onClickImage, image }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={image}
        alt={tags}
        onClick={() => onClickImage(largeImageURL)}
      />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  largeImageURL: propTypes.string,
  tags: propTypes.string,
  webformatURL: propTypes.string,
  onClickImage: propTypes.func,
};
