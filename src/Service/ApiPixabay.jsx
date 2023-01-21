import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export default async function fetchImage(
  serchQuery,
  numberPage,
  AbortController
) {
  return axios(
    {
      params: {
        key: '24263315-36ea98cb6d0ce52f0b1c6e073',
        q: serchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: numberPage,
      },
    },
    { signal: AbortController.signal }
  ).then(res => res.data.hits);
}
