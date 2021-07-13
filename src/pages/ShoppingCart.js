import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartItem from '../components/ShoppingCartItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      totalShoppingCart: 1,
    };
  }

  render() {
    const { totalShoppingCart } = this.state;
    return (
      <>
        <header>
          <Link to="/">Voltar</Link>
          <h1>Carrinho de Compras</h1>
        </header>
        <main>
          {
            totalShoppingCart === 0
              ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
              : <ShoppingCartItem />
          }
        </main>
      </>
    );
  }
}

export default ShoppingCart;
