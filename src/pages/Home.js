import React from 'react';
import Search from '../components/Search';
import ShoppingCartButton from '../components/ShoppingCartButton';
import ShoppingList from '../components/ShoppingList';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      productList: [],
    };

    this.searchChange = this.searchChange.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
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

  fetchApi() {
    const { search } = this.state;
    api.getProductsFromCategoryAndQuery(null, search).then((response) => {
      this.setState({
        productList: response,
      });
    });
  }

  render() {
    const { productList } = this.state;
    return (
      <div>
        <Search
          onClick={ (event) => this.handleClick(event) }
          onChange={ (event) => this.searchChange(event) }
          name="search"
        />
        <ShoppingList productList={ productList } />
        <ShoppingCartButton />
      </div>
    );
  }
}

export default Home;
