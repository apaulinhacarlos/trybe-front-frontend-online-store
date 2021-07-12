import React from 'react';
import Search from './components/Search';
import CategoriesList from './components/CategoriesList';
import * as api from './services/api';
import './App.css';

class App extends React.Component {
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
        <CategoriesList categories={ categories } />
      </div>
    );
  }
}

export default App;
