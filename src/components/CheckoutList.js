import React from 'react';
import PropTypes from 'prop-types';

class CheckoutList extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, quantity, thumbnail } = product;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h3>{ title }</h3>
        <p>{ `Preço: ${price}` }</p>
        <p>{ `Quantidade: ${quantity}` }</p>
      </div>
    );
  }
}

CheckoutList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default CheckoutList;
