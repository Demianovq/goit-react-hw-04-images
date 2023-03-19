import axios from 'axios';

export const GetImages = async (searchValue, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '33034039-f29345260b0e0482a01649a08';
  const params = {
    key: API_KEY,
    q: searchValue,
    image_type: 'photo',
    page: page,
    per_page: 12,
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = axios.get(BASE_URL, { params });
  return response;
};
