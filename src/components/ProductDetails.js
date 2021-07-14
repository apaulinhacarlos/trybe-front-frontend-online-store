import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RatingForm from './RatingForm';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.saveProductLocalStorage = this.saveProductLocalStorage.bind(this);
  }

  saveProductLocalStorage() {
    const { match } = this.props;
    const { params } = match;
    const { id, title, price } = params;
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    const newProduct = {
      id,
      title,
      price,
      quantity: 1,
    };
    cartProducts.push(newProduct);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }

  render() {
    const { match } = this.props;
    const { params } = match;
    const { title, price } = params;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <span>{`R$ ${price}`}</span>
        <Link
          to="/shopping-cart"
          onClick={ this.saveProductLocalStorage }
          data-testid="product-detail-add-to-cart"
        >
          Comprar
        </Link>
        <RatingForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
