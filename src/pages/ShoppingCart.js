/*

Página => ShoppingCart

Requisito(s) correspondente(s) => 3

Descrição => Página do carrinho de compras com a mensagem "Seu carrinho está vazio".

Observações => atributo "data-testid" obrigatório para passar no teste de requisito.

*/

import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    const products = JSON.parse(localStorage.getItem('cartProducts'));
    if (products.length <= 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div>
        {products.map((product, index) => (
          <div
            key={ index }
          >
            <img
              src={ product.thumbnail }
              alt={ product.title }
            />
            <h3
              data-testid="shopping-cart-product-name"
            >
              { product.title }
            </h3>
            <span>
              { `R$ ${product.price}` }
            </span>
            <span
              data-testid="shopping-cart-product-quantity"
            >
              { `Qtd.:${product.available_quantity}` }
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
