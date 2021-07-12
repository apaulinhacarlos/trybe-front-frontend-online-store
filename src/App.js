import React from 'react';
import './App.css';
import * as api from './services/api';

class App extends React.Component {
  render() {
    api.getProductsFromCategoryAndQuery("MLB5672", null).then((r) => console.log(r.results));
    return (<p></p>);
  }
}

export default App;
