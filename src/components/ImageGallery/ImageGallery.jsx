import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../ButtonLoadmore/Button';
import { GetImages } from '../../GetImages';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-toastify';

export class ImageGallery extends Component {
  state = {
    images: [],
    isMore: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { textSearch, page } = this.props;
    if (
      prevProps.textSearch !== textSearch ||
      (prevProps.page !== page && page !== 1)
    ) {
      this.setState({
        isLoading: true,
        isMore: false,
      });
      if (prevProps.textSearch !== textSearch) {
        this.setState({
          images: [],
          isLoading: true,
          isMore: false,
        });
      }
      GetImages(textSearch, page).then(resp => {
        if (prevProps.textSearch !== textSearch) {
          this.setState({ images: [...resp.data.hits] });
        } else {
          this.setState({
            images: [...prevState.images, ...resp.data.hits],
          });
        }
        if (resp.data.hits.length > 11) {
          this.setState({
            isMore: true,
          });

          this.setState({
            isLoading: false,
          });
        }
        if (resp.data.hits.length === 0) {
          toast.error('Sorry, we did not find any images . Please try again.');
          this.setState({
            isLoading: false,
            isMore: false,
          });
        }
      });
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading && <Loader />}
        {this.state.images.length > 0 && (
          <ul className="ImageGallery">
            {this.state.images.map(image => {
              return <ImageGalleryItem key={image.id} image={image} />;
            })}
          </ul>
        )}

        {this.state.isMore && <Button onClick={this.props.handleLoadMore} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  textSearch: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
};
