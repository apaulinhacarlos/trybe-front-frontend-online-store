/*

Página => ShoppingCart

Requisito(s) correspondente(s) => 3

Descrição => Página do carrinho de compras com a mensagem "Seu carrinho está vazio".

Observações => atributo "data-testid" obrigatório para passar no teste de requisito.

*/

import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartItem from '../components/ShoppingCartItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: [],
    };
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.saveProductLocalStorage = this.saveProductLocalStorage.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  componentDidUpdate() {
    const { saveProductLocalStorage } = this;
    saveProductLocalStorage();
  }

  handleDecrease(index) {
    const { shoppingCart } = this.state;
    const newShoppingCart = [...shoppingCart];
    newShoppingCart[index].quantity -= 1;
    this.setState({
      shoppingCart: newShoppingCart,
    });
    console.log(shoppingCart[index].quantity);
  }

  handleIncrease(index) {
    const { shoppingCart } = this.state;
    const newShoppingCart = [...shoppingCart];
    newShoppingCart[index].quantity += 1;
    this.setState({
      shoppingCart: newShoppingCart,
    });
    console.log(shoppingCart[index].quantity);
  }

  getLocalStorage() {
    const getLocalStorage = JSON.parse(localStorage.getItem('cartProducts'));
    this.setState({
      shoppingCart: getLocalStorage,
    });
  }

  saveProductLocalStorage() {
    const { shoppingCart } = this.state;
    localStorage.setItem('cartProducts', JSON.stringify(shoppingCart));
  }

  totalPrice() {
    const { shoppingCart } = this.state;
    const totalPriceCart = shoppingCart.reduce((acc, item) => {
      const { price, quantity } = item;
      return (acc + (price * quantity));
    }, 0);
    return totalPriceCart;
  }

  render() {
    const { shoppingCart } = this.state;
    const { totalPrice } = this;

    return (
      <>
        <header>
          <Link to="/">Voltar</Link>
          <h1>Carrinho de Compras</h1>
        </header>
        <main>
          {
            shoppingCart.length <= 0
              ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
              : shoppingCart.map((item, index) => (
                <ShoppingCartItem
                  shoppingCart={ item }
                  key={ index }
                  index={ index }
                  handleDecrease={ this.handleDecrease }
                  handleIncrease={ this.handleIncrease }
                />
              ))
          }
          <div>
            <p>{ `R$ ${totalPrice()}` }</p>
          </div>

          <div>
            <button type="button">Finalizar Compra</button>
          </div>
        </main>
      </>
    );
  }
}

export default ShoppingCart;
