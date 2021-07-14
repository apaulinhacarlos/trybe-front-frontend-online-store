import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import './App.css';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/product-details/:name" component={ ProductDetails } />
        </Switch>
        <Checkout />
      </BrowserRouter>
    );
  }
}

export default App;
