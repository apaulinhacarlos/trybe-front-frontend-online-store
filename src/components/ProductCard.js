import React from 'react';
import PropTypes from 'prop-types';

class ProductsCard extends React.Component {
  render() {
    const { product } = this.props;
    const { price, thumbnail, title } = product;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3>{ title }</h3>
        <span>{ price }</span>
      </div>
    );
  }
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductsCard;
