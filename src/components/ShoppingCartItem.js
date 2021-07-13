import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: [],
      totalShoppingCart: 0,
    };

    this.getLocalStorage = this.getLocalStorage.bind(this);
    // this.decreaseQuantity = this.decreaseQuantity.bind(this);
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.totalValue = this.totalValue.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const getLocalStorage = localStorage.getItem();
    this.setState({
      shoppingCart: getLocalStorage,
    });
  }

  // handleDecrease() {

  // }

  // handleIncrease() {

  // }

  // totalValue() {

  // }

  render() {
    // const id = 'MLB1774447998';
    // const title = 'Moto G9 Play Dual Sim 64 Gb Azul-safira 4 Gb Ram';
    // const price = 1093;
    // const thumbnail = 'http://http2.mlstatic.com/D_662487-MLA43910324327_102020-I.jpg';

    const { shoppingCart } = this.state;
    const { title, price, thumbnail } = shoppingCart;
    // const { totalShoppingCart } = this.state;

    return (
      <main>
        <div>
          <img src={ thumbnail } alt={ title } />
          <p>{ title }</p>

          <button
            type="button"
            // onClick={ handleDecrease }
          >
            -
          </button>
          <p>quantidade variavel</p>
          <button
            type="button"
            // onClick={ handleIncrease }
          >
            +
          </button>
          <p>{ `R$ ${price}` }</p>
        </div>
        <div>
          <p>Valor total da compra: R$ {`${ 1+1 }`}</p>
        </div>
        <div>
          <button type="button">Finalizar Compra</button>
        </div>
      </main>
    );
  }
}

export default ShoppingCartItem;
