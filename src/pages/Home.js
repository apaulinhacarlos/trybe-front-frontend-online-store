import React from 'react';
import Search from '../components/Search';
import ShoppingCartButton from '../components/ShoppingCartButton';
import CategoriesList from '../components/CategoriesList';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <Search />
        <ShoppingCartButton />
        <CategoriesList categories={ categories } />
      </div>
    );
  }
}

export default Home;
