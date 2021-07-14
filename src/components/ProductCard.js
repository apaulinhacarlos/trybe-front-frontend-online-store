/*

Componente => ProductCard

Requisito(s) correspondente(s) => 5

Descrição => Recebe um objeto como props e cria uma div com dados do objeto.
Dentro da div é criada uma imagem, um título e um preço.

*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    const { price, thumbnail, title } = product;
    return (
      <div
        data-testid="product"
      >
        <img
          src={ thumbnail }
          alt={ title }
        />
        <h3>
          { title }
        </h3>
        <span>
          { `R$ ${price}` }
        </span>
        <button
          type="button"
          onClick={ this.saveProductLocalStorage }
          data-testid="product-add-to-cart"
        >
          Comprar
        </button>
        <Link
          to={ `/product-details/${title}` }
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
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductsCard;
