import React from 'react';
import PropTypes from 'prop-types';
import { IconButton1 } from './IconButton.style';

// Закрытие модального окна
const IconButton = ({ children, onClick, ...allyProps }) => (
  <IconButton1
    type="button"
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </IconButton1>
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
