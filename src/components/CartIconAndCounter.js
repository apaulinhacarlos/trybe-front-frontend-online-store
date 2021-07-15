import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartIconAndCounter extends React.Component {
  render() {
    const { increaseOneInTheCart } = this.props;
    return (
      <Link
        to="/shopping-cart"
        data-testid="shopping-cart-button"
        className="shopping-cart-button"
      >
        <span className="shopping-cart material-icons-outlined">
          shopping_cart
        </span>
        <span
          data-testid="shopping-cart-size"
          className="shopping-cart-number"
          increaseOneInTheCart={ increaseOneInTheCart }
        >
          { JSON.parse(localStorage.cartProducts).length }
        </span>
      </Link>
    );
  }
}

CartIconAndCounter.propTypes = {
  increaseOneInTheCart: PropTypes.func.isRequired,
};

export default CartIconAndCounter;
