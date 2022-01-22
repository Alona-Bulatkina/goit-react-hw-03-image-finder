import React from "react";
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

export default class Searchbar extends React.Component {
  state = {
    pictureName: '',
  }

  handleNameChange = event => {
    this.setState({ pictureName: event.currentTarget.value.toLowerCase});
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: '' });

    this.resetForm();
  }



  render() {
    const { pictureName, handleNameChange } = this.state;
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <ImSearch style={{ marginRight: 8 }} />
            <span></span>
          </button>

          <input
            type="text"
            name="pictureName"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={pictureName}
            onChange={handleNameChange}
          />
        </form>
      </header>
    )
  }
};

Searchbar.propTypes = {
  pictureName: PropTypes.string.isRequired,
  handleNameChange: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
};