import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RatingForm from './RatingForm';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
      loading: true,
    }
    this.saveProductLocalStorage = this.saveProductLocalStorage.bind(this);
  }

  saveProductLocalStorage() {
    const {
      product: {
        title,
        price,
        id,
        thumbnail,
      },
    } = this.state;
    console.log(thumbnail)
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

  async componentDidMount() {
    const {
      match: {
        params: {
          category,
          id,
        },
      },
    } = this.props;
    const call = await api.getProductsFromCategoryAndQuery(category, id);
    const product = call.results
      ? call.results[0]
      : call;

    this.setState({
      product,
      loading: false
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
     return <div>loading...</div>; 
    }

    const { product: { title, price } } = this.state;

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
