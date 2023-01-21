import axios from 'axios';

const fetchImage = async (searchQuery, page) => {
  return axios({
    url: `https://pixabay.com/api/?`,
    params: {
      key: '24263315-36ea98cb6d0ce52f0b1c6e073',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  }).then(res => res.data.hits);
};

export default fetchImage;
