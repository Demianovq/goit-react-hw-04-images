import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../ButtonLoadmore/Button';
import { GetImages } from '../../GetImages';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-toastify';

export const ImageGallery = props => {
  const [images, setImages] = useState([]);
  const [isMore, ShowAMore] = useState(false);
  const [isLoading, ShowALoading] = useState(false);
  const { textSearch, page, handleLoadMore } = props;

  useEffect(() => {
    if (textSearch === '') {
      setImages([]);
      return;
    }
    if (page === 1) {
      setImages([]);
      ShowALoading(true);
    }
    ShowAMore(false);
    ShowALoading(true);

    GetImages(textSearch, page).then(resp => {
      if (page === 1) {
        setImages([...resp.data.hits]);
      } else {
        setImages(Prev => [...Prev, ...resp.data.hits]);
      }
      if (resp.data.hits.length > 11) {
        ShowAMore(true);
        ShowALoading(false);
      }
      if (resp.data.hits.length === 0) {
        toast.error('Sorry, we did not find any images . Please try again.');
        ShowAMore(false);
        ShowALoading(false);
      }
    });
  }, [textSearch, page]);

  return (
    <>
      {isLoading && <Loader />}
      {images.length > 0 && (
        <ul className="ImageGallery">
          {images.map(image => {
            return <ImageGalleryItem key={image.id} image={image} />;
          })}
        </ul>
      )}

      {isMore && <Button onClick={handleLoadMore} />}
    </>
  );
};

ImageGallery.propTypes = {
  textSearch: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
};
