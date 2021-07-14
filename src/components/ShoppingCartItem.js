import React from 'react';
import PropTypes from 'prop-types';
import AddCartButton from './AddCartButton';
import Button from './Button';

class ShoppingCartItem extends React.Component {
  render() {
    const {
      shoppingCart,
      index,
      handleDecrease,
      handleIncrease,
      handleRemove,
    } = this.props;
    const { title, price, thumbnail } = shoppingCart;

    return (
      <div>
        <div>
          <img src={ thumbnail } alt={ title } />
          <h3 data-testid="shopping-cart-product-name">{ title }</h3>
          <Button
            className="shopping-cart-remove-btn"
            title="X"
            name="remove-cart-item"
            onClick={ () => handleRemove(index) }
          />
          <AddCartButton
            shoppingCart={ shoppingCart }
            index={ index }
            handleDecrease={ handleDecrease }
            handleIncrease={ handleIncrease }
          />
          <p>{ `R$ ${price}` }</p>
        </div>
      </div>
    );
  }
}

ShoppingCartItem.propTypes = {
  handleDecrease: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  shoppingCart: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ShoppingCartItem;
