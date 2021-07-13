import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map((categorie) => (
          <li
            key={ categorie.id }
            data-testid="category"
          >
            { categorie.name }
          </li>
        ))}
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default CategoriesList;
