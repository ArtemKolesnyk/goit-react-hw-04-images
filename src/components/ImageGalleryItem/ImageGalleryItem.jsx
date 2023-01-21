import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { useState } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <GalleryItem>
      <GalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => setIsOpenModal(prevState => !prevState)}
      />
      {isOpenModal && (
        <Modal
          onClose={() => setIsOpenModal(prevState => !prevState)}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      )}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
