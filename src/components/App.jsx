import { useState, useEffect } from 'react';
import GlobalStyle from '../GlobalStyle';
import { AppStyle } from './App.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import fetchImage from 'Service/ApiPixabay';
import Loader from './Loader';
import { BtnLoadMore } from './Modal/Modal.styled';
import ErrorBox from './ErrorBox';

export const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const App = () => {
  const [desiredImage, setDesireImage] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  //const [error, setError] = useState(null);

  useEffect(() => {
    if (desiredImage === '') {
      return;
    }

    const controller = new AbortController();
    async function getData() {
      try {
        const hits = await fetchImage(desiredImage, page, controller);
        setStatus(Status.PENDING);
        if (hits.length !== 0) {
          setStatus(Status.RESOLVED);
          toast.success(`Enjoy viewing the pictures!`);
          console.log(hits);
          // setImages(prevImg => [...prevImg, ...hits]);
        } else {
          setStatus(Status.REJECTED);
          toast.info(
            `it's a pity, but the query with the name ${desiredImage} did not give results!`
          );
        }
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
      }
    }
    getData();
    return () => {
      controller.abort();
    };
  }, [desiredImage, page]);

  const handleFormSubmit = e => {
    setDesireImage(e);
    setImages([]);
    setPage(1);
    setStatus(Status.IDLE);
  };

  return (
    <>
      <GlobalStyle />
      <AppStyle>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="colored"
        />
        <Searchbar onSubmit={handleFormSubmit} />
        {status === 'pending' && <Loader />}
        <ImageGallery images={images} />
        {images.length !== 0 && status === 'resolved' && (
          <BtnLoadMore
            type="button"
            onClick={() => setPage(prevPage => prevPage + 1)}
          >
            Load More
          </BtnLoadMore>
        )}
        {status === 'rejected' && <ErrorBox />}
      </AppStyle>
    </>
  );
};

export default App;
