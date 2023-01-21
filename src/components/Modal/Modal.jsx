import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, ModalImg } from './Modal.styled';

export default function Modal({ onClose, largeImageURL, tags }) {
  useEffect(() => {
    window.addEventListener('keydown', closeEscModal);
    return () => {
      window.removeEventListener('keydown', closeEscModal);
    };
  });

  function closeEscModal(e) {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  function closeModal(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <Overlay onClick={closeModal}>
      <ModalImg>
        <img src={largeImageURL} alt={tags} />
      </ModalImg>
    </Overlay>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
