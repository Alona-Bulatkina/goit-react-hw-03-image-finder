import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SearchFormButton, SearchForm1, SearchFormInput, SearchFormLabel } from './SearchFrom.style';

class SearchFrom extends Component {
  state = {
    query: '',
  };

  handleSearchInput = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // // Запрещает отправку пустого инпута
    // if (!this.state.query) return;
    if (this.state.query.trim() === '') {
      return toast('Введите запрос');
    }

    // Отдать данные внешнему компоненту
    this.props.onSearch(this.state.query);
    this.setState({query: ''});
    };

  // resetForm = () =>
  //   this.setState({
  //     query: '',
  //   });

  render() {
    return (
      <SearchForm1 onSubmit={this.handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.handleSearchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm1>
    );
  }
}

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFrom;