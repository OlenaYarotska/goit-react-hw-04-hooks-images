import propTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onClickImg }) => {
  return (
    <div className="ImageContainer">
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClickImage={onClickImg}
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
