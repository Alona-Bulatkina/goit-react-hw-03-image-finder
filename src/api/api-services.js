import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = async (query, currentPage) => {
  const { data } = await axios.get(
    `/?q=${query}&page=${currentPage}&key=24397436-bb721594672d7e5644d807709&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data;
};

export default fetchImages;