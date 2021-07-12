import React from 'react';
import Search from '../components/Search';
import ShoppingCartButton from '../components/ShoppingCartButton';
import ShoppingList from '../components/ShoppingList';
import CategoriesList from '../components/CategoriesList';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    
    this.state = {
      search: '',
      productList: [],
      categories: [],
    };

    this.searchChange = this.searchChange.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.fetchApi();
  }

  searchChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }
  
  fetchApi() {
    const { search } = this.state;
    api.getProductsFromCategoryAndQuery(null, search).then((response) => {
      this.setState({
        productList: response,
      });
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    const { productList, categories } = this.state;
    return (
      <div>
        <Search
          onClick={ (event) => this.handleClick(event) }
          onChange={ (event) => this.searchChange(event) }
          name="search"
        />
        <ShoppingList productList={ productList } />
        <ShoppingCartButton />
        <CategoriesList categories={ categories } />
      <div/>
    );
  }
}

export default Home;
