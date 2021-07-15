import React from 'react';
import { Link } from 'react-router-dom';

class CartIconAndCounter extends React.Component {
  render() {
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
        >
          { JSON.parse(localStorage.cartProducts).length }
        </span>
      </Link>
    );
  }
}

export default CartIconAndCounter;
