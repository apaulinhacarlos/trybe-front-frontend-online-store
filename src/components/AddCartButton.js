import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class AddCartButton extends React.Component {
  render() {
    const { handleDecrease, handleIncrease, index, shoppingCart } = this.props;
    if (shoppingCart.quantity === null || shoppingCart.quantity === undefined) {
      shoppingCart.quantity = 1;
    }
    return (
      <div>
        <Button
          name="decreaseButton"
          className="decrease-button"
          onClick={ () => handleDecrease(index) }
          title="-"
          dataTestId="product-decrease-quantity"
        />
        <p data-testid="shopping-cart-product-quantity">{shoppingCart.quantity}</p>
        <Button
          name="increaseButton"
          className="increase-button"
          onClick={ () => handleIncrease(index) }
          title="+"
          dataTestId="product-increase-quantity"
        />
      </div>

    );
  }
}

AddCartButton.propTypes = {
  handleDecrease: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  shoppingCart: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default AddCartButton;
