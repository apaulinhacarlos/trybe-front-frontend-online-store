import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';
import ProductsList from '../components/ProductsList';
import Search from '../components/Search';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      products: [],
      categories: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  async fetchProducts() {
    const { search } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(null, search);
    const { results } = products;
    this.setState({
      products: results,
    });
  }

  changeSearch(e) {
    const { value } = e.target;
    this.setState({
      search: value,
    });
  }

  render() {
    const { search, products, categories } = this.state;
    return (
      <div>
        <Search
          value={ search }
          onChange={ this.changeSearch }
          onClick={ this.fetchProducts }
        />
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <CategoriesList categories={ categories } />
        <ProductsList products={ products } />
      </div>
    );
  }
}

export default Home;
