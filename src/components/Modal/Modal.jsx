import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal_root');

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

  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalImg>
        <img src={largeImageURL} alt={tags} />
      </ModalImg>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  webkitURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
