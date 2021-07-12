import React from 'react';
import Search from '../components/Search';
import ShoppingCartButton from '../components/ShoppingCartButton';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <ShoppingCartButton />
      </div>
    );
  }
}

export default Home;
