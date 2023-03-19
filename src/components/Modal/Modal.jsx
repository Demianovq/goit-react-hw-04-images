import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('root');

export const Modal = ({ onOverlayClose, image, alt }) => {
  useEffect(() => {
    const ecsKeyClose = e => {
      if (e.code === 'Escape') {
        onOverlayClose();
      }
    };
    window.addEventListener('keydown', ecsKeyClose);
    return () => {
      window.removeEventListener('keydown', ecsKeyClose);
    };
  }, [onOverlayClose]);

  const clickOverlayClose = e => {
    if (e.currentTarget !== e.target) {
      onOverlayClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={clickOverlayClose}>
      <div className="Modal">
        <img src={image} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onOverlayClose: PropTypes.func.isRequired,
};
