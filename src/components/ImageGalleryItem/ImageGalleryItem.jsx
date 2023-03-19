import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showAModal = () => {
    setIsOpen(prev => !prev);
  };

  const { id, webformatURL, tags, largeImageURL } = image;

  return (
    <li key={id} onClick={showAModal} className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
      {isOpen && (
        <Modal onOverlayClose={showAModal} image={largeImageURL} alt={tags} />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
