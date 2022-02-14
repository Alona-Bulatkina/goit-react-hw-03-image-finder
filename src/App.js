import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Message from './components/Message/Message';
import Modal from './components/Modal/Modal';
import IconButton from './components/IconButton/IconButton';
import { ToastContainer } from 'react-toastify';
// import { ReactComponent as CloseIcon } from './icon/icon.svg';
import { BsX } from 'react-icons/bs';


import fetchImages from './api/api-services';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeImage: '',
    error: null,
  };

  // Если при обновлении запрос не равен между стейтами, тогда делаем фетч
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }
  }

  // Принимаем с формы запрос и пишем в стейт + сбрасываем после отправки ключи из стейта
  onChangeQuery = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  };

  // Получаем дату из фетча
  getImages = async () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({
      isLoading: true,
    });

    try {
      const { hits,  totalHits } = await fetchImages(searchQuery, currentPage);
      
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        currentPage: prevState.currentPage + 1,
        totalHits: totalHits,
      }));

      if (currentPage !== 1) {
        this.scrollOnLoadButton();
      }
    } catch (error) {
      console.log('Smth wrong with App fetch', error);
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  // Получает полное изображение, пишет его в стейт и открывает модалку
  handleGalleryItem = fullImageUrl => {
    this.setState({
      largeImage: fullImageUrl,
      showModal: true,
    });
  };

  // Переключение модалки
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImage: '',
    }));
  };

  // Скролл при клике на кнопку
  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, currentPage, isLoading, showModal, largeImage, error, totalHits } = this.state;
    const needToShowLoadMore = totalHits / 12 > currentPage; // Нужны доп проверки;
   
    // const [currentHitsOnPage, setCurrentHitsOnPage] = useState(null);
    // {currentHitsOnPage === 12 && !loading && (
    // <Button onClick={handleLoadMoreClick} />
    // )}
    // после успешного запроса нужно установить 
    // setCurrentHitsOnPage(hits.length);
     
    return (
      <>
        <Searchbar onSearch={this.onChangeQuery} />

        {images.length < 1 && (
        <ToastContainer position="top-center"
        autoClose={5000}
        pauseOnHover />
        )}

        <ImageGallery images={images} onImageClick={this.handleGalleryItem} />

        {needToShowLoadMore && <Button onClick={this.getImages} />}

        {showModal && (
          <Modal onClose={this.toggleModal} >
            <div>
              <IconButton onClick={this.toggleModal} aria-label="Close modal" >
                <BsX width="2em" height="2em" fill="#7e7b7b" size="40px" position="absolute" top="10px" right="10px" />
              </IconButton>
            </div>

            <img src={largeImage} alt="" />
          </Modal>
        )}

        {isLoading && <Loader />}

        {error && (
          <Message>
    <h2>Oops! 😫</h2>
     <p>
     Sorry, something went wrong. Please try again, or{' '}
    <a href="/">refresh the page</a>.
     </p>
          </Message>
          
        )}
        
      </>
    );
  }
}

export default App;


