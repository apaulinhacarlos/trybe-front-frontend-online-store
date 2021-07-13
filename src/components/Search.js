import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { value, onChange, onClick } = this.props;
    return (
      <div>
        <input
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ onClick }
          data-testid="query-button"
        >
          Buscar
        </button>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Search;
