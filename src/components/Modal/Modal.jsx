import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.getElementById('root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.ecsKeyClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.ecsKeyClose);
  }

  ecsKeyClose = e => {
    if (e.code === 'Escape') {
      this.props.onOverlayClose();
    }
  };

  clickOverlayClose = e => {
    if (e.currentTarget !== e.target) {
      this.props.onOverlayClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.clickOverlayClose}>
        <div className="Modal">
          <img src={this.props.image} alt={this.props.alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onOverlayClose: PropTypes.func.isRequired,
};
