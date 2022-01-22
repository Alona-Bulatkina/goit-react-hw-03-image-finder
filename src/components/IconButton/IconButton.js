import React from 'react';
import PropTypes from 'prop-types';

// Закрытие модального окна
const IconButton = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
