import PropTypes from 'prop-types';
import { ImageGalleryItem1, ImageGalleryItemImage } from './ImageGalleryItem.style';

const ImageGalleryItem = ({ image, onImageClick }) => {
  const fullImage = () => onImageClick(image.largeImageURL);

  return (
    <ImageGalleryItem1>
      <ImageGalleryItemImage
        src={image.webformatURL}
        alt={image.tags}
        onClick={fullImage}
      />
    </ImageGalleryItem1>
  );
};

ImageGalleryItem.defaultProps = {
  tags: '',
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;