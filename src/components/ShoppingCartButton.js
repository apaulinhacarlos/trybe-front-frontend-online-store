import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/shopping-cart">CarrinhoCompras</Link>
    );
  }
}

export default ShoppingCartButton;
