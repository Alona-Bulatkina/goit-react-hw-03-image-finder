import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalOverlay, Modal1 } from './Modal.style';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <ModalOverlay onClick={this.handleBackdropClick}>
        <Modal1>{this.props.children}</Modal1>
      </ModalOverlay>,
      modalRoot,
    );
  }
}
Modal.defaultProps = {
  children: null,
};
Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
export default Modal;