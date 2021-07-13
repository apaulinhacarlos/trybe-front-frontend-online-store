import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categories, handleClick } = this.props;
    return (
      <ul>
        {categories.map((categorie) => (
          <button
            type="button"
            id={ categorie.id }
            onClick={ handleClick }
            key={ categorie.id }
            data-testid="category"
          >
            { categorie.name }
          </button>
        ))}
      </ul>
    );
  }
}

CategoriesList.defaultProps = {
  handleClick: () => {},
};

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func,
};

export default CategoriesList;
