import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const [textSearch, setATextSearch] = useState('');
  const [page, setAPage] = useState(1);

  const handleSubmit = textSearch => {
    if (textSearch === '') return;
    setATextSearch(textSearch);
    setAPage(1);
  };

  const handleLoadMore = () => {
    setAPage(prev => prev + 1);
  };

  return (
    <div>
      <Searchbar onSearch={handleSubmit} />

      <ImageGallery
        textSearch={textSearch}
        page={page}
        handleLoadMore={handleLoadMore}
      />
      <ToastContainer />
    </div>
  );
};
