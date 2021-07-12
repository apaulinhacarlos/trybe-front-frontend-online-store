import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { onClick, name, onChange } = this.props;
    return (
      <form>
        <div data-testid="home-initial-message">
          <label htmlFor="input-search">
            <input
              id="input-search"
              type="text"
              onChange={ onChange }
              name={ name }
              data-testid="query-input"
            />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ onClick }
          >
            Pesquisar
          </button>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
