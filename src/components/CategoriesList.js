import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map((categorie, index) => <li key={ index }>{categorie.name}</li>)}
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CategoriesList;
