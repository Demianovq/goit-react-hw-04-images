import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  showAModal = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  render() {
    return (
      <li
        key={this.props.id}
        onClick={this.showAModal}
        className="ImageGalleryItem"
      >
        <img
          src={this.props.image.webformatURL}
          alt={this.props.image.tags}
          className="ImageGalleryItem-image"
        />
        {this.state.isOpen && (
          <Modal
            onOverlayClose={this.showAModal}
            image={this.props.image.largeImageURL}
            alt={this.props.image.tags}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
