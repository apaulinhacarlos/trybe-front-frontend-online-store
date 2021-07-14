/*

Página => Home

Requisito(s) correspondente(s) => 2, 3, 4 e 5

Descrição => Página inicial da aplicação.

*/

import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';
import ProductsList from '../components/ProductsList';
import Search from '../components/Search';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts') || '[]');
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    this.state = {
      search: '',
      products: [],
      categories: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.fetchProductsCategory = this.fetchProductsCategory.bind(this);
    this.fetchProductsHome = this.fetchProductsHome.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.fetchProductsHome();
  }

  // Requisito 06: um handle para atribuir o id da categoria na
  //               função, quando a categoria for selecionada

  handleClickCategory(e) {
    const id = e.target.getAttribute('id');
    this.fetchProductsCategory(id);
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

  async fetchProductsHome() {
    const products = await api.getProductsFromCategoryAndQuery(null, 'rt');
    const { results } = products;
    this.setState({
      products: results,
    });
  }

  // Requisito 06: função para buscar os produtos por categoria

  async fetchProductsCategory(id) {
    const request = await api.getProductsFromCategoryAndQuery(id, null);
    const { results } = request;
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
        <CategoriesList
          categories={ categories }
          handleClick={ this.handleClickCategory }
        />
        <ProductsList products={ products } />
      </div>
    );
  }
}

export default Home;
