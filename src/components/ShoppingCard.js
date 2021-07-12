import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <h4>{ title }</h4>
        <img alt={ title } src={ thumbnail } />
        <h5>{ `R$ ${price},00` }</h5>
      </div>
    );
  }
}

ShoppingCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShoppingCard;
