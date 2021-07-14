/*

Componente => ProductCard

Requisito(s) correspondente(s) => 5

Descrição => Recebe um objeto como props e cria uma div com dados do objeto.
Dentro da div é criada uma imagem, um título e um preço.

*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

class ProductsCard extends React.Component {
  constructor() {
    super();
    this.saveProductLocalStorage = this.saveProductLocalStorage.bind(this);
  }

  saveProductLocalStorage() {
    const { product } = this.props;
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    const { id, title, price, thumbnail } = product;
    const newProduct = {
      id,
      title,
      price,
      thumbnail,
      quantity: 1,
    };
    cartProducts.push(newProduct);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }

  render() {
    const { product } = this.props;
    const { shipping } = product;
    const freeShipping = shipping.free_shipping;
    const { id, price, thumbnail, title } = product;
    if (product.quantity === null || product.quantity === undefined) {
      product.quantity = 1;
    }
    const freteValue = freeShipping ? 'SIM' : 'NÃO';
    const { saveProductLocalStorage } = this;
    return (
      <div
        data-testid="product"
      >
        <img
          src={ thumbnail }
          alt={ title }
        />
        <h3 data-testid="shopping-cart-product-name">
          { title }
        </h3>
        <span>
          { `R$ ${price}` }
        </span>
        <span data-testid="shopping-cart-product-quantity">
          { `Qtd.: ${product.quantity}` }
        </span>
        <span>
          { `Frete grátis: ${freteValue}` }
        </span>
        <Button
          title="Comprar"
          onClick={ saveProductLocalStorage }
          className="buy-btn"
          name="buy"
          dataTestId="product-add-to-cart"
        />
        <Link
          to={ `/product-details/${id}/${title}/${price}` }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductsCard;
