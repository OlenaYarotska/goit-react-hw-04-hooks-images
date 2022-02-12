import propTypes from "prop-types";

const ImageGalleryItem = ({
  webfofmatURL,
  largeImageURL,
  tags,
  onClickImage,
  onOpenModal,
}) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webfofmatURL}
        alt={tags}
        // onClick={() => onClickImage(largeImageURL)}
        onClick={onOpenModal}
        data-source={largeImageURL}
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
