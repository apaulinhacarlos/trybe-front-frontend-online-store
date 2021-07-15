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
  }

  componentDidMount() {
    this.fetchCategories();
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
        <header className="main-products-header">
          <img
            id="header-image"
            src="https://cdn.discordapp.com/attachments/864189505500872756/864959971628417044/logo.png"
            alt=""
          />
          <Search
            value={ search }
            onChange={ this.changeSearch }
            onClick={ this.fetchProducts }
          />
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
            className="shopping-cart-button"
          >
            <span className="shopping-cart material-icons-outlined">
              shopping_cart
            </span>
          </Link>
        </header>
        <main className="main-home">
          <CategoriesList
            categories={ categories }
            handleClick={ this.handleClickCategory }
          />
          <section className="main-products-section">
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <ProductsList products={ products } />
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
