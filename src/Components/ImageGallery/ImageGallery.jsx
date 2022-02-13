import propTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, openModal }) => {
  return (
    <div className="ImageContainer">
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            webfofmatURL={webformatURL}
            tags={tags}
            onOpenModal={openModal}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: propTypes.array,
  onClickImg: propTypes.func,
};
