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
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const getLocalStorage = JSON.parse(localStorage.getItem('cartProducts'));
    this.setState({
      shoppingCart: getLocalStorage,
    });
  }

  render() {
    const { shoppingCart } = this.state;
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
                />
              ))
          }
        </main>
      </>
    );
    // if (products.length <= 0) {
    //   return (
    //     <div>
    //       <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    //     </div>
    //   );
    // }

    // return (
  //   <div>
  //     {products.map((product, index) => (
  //       <div
  //         key={ index }
  //       >
  //         <img
  //           src={ product.thumbnail }
  //           alt={ product.title }
  //         />
  //         <h3
  //           data-testid="shopping-cart-product-name"
  //         >
  //           { product.title }
  //         </h3>
  //         <span>
  //           { `R$ ${product.price}` }
  //         </span>
  //         <span
  //           data-testid="shopping-cart-product-quantity"
  //         >
  //           { `Qtd.:${product.available_quantity}` }
  //         </span>
  //       </div>
  //     ))}
  //   </div>
  // );


  }
}

export default ShoppingCart;
