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
  product: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default CheckoutList;
