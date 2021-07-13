import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCartItem extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     shoppingCart: [],
  //     totalShoppingCart: 0,
  //   };

  //   this.decreaseQuantity = this.decreaseQuantity.bind(this);
  //   this.increaseQuantity = this.increaseQuantity.bind(this);
  //   this.totalValue = this.totalValue.bind(this);
  // }

  // componentDidMount() {

  // }

  // handleDecrease() {

  // }

  // handleIncrease() {

  // }

  // totalValue() {

  // }

  render() {
    const { shoppingCart } = this.props;
    const { title, price, thumbnail } = shoppingCart;

    return (
      <div>
        <div>
          <img src={ thumbnail } alt={ title } />
          <h3 data-testid="shopping-cart-product-name">{ title }</h3>
          <p>{ `R$ ${price}` }</p>

          <button
            type="button"
            // onClick={ handleDecrease }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">1</p>
          <button
            type="button"
            // onClick={ handleIncrease }
          >
            +
          </button>

        </div>

        <div>
          <p>Valor total da compra: R$ {`${1+1}`}</p>
        </div>

        <div>
          <button type="button">Finalizar Compra</button>
        </div>

      </div>
    );
  }
}

ShoppingCartItem.propTypes = {
  shoppingCart: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default ShoppingCartItem;
