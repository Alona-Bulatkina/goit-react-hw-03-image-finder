import React from "react";
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import SearchFrom from "../SearchFrom/SearchFrom";
import { SearchbarHeader } from './Searchbar.style';

const Searchbar = ({ onSearch }) => (
  <SearchbarHeader>
    <SearchFrom onSearch={onSearch} />
  </SearchbarHeader>
);

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;