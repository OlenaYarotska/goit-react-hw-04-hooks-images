import propTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onImgClick }) => {
  return (
    <div className="ImageContainer">
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            webfofmatURL={webformatURL}
            tags={tags}
            onOpenModal={onImgClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: propTypes.array,
  onImgClick: propTypes.func,
};
