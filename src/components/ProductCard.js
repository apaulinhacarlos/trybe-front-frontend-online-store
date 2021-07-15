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
    const { id, title, price, thumbnail, category_id: categoryId } = product;
    const newProduct = {
      id,
      title,
      price,
      thumbnail,
      quantity: 1,
      categoryId,
    };
    cartProducts.push(newProduct);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }

  render() {
    const { product } = this.props;
    const {
      id,
      price,
      thumbnail,
      title,
      category_id: categoryId,
      shipping: {
        free_shipping: freeShipping,
      },
    } = product;
    console.log(product)
    const freteValue = freeShipping ? 'SIM' : 'NÃO';
    const { saveProductLocalStorage } = this;
    const LINK_PATH = `/product-details/${categoryId}/${id}`;
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
          to={ LINK_PATH }
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
    category_id: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductsCard;
