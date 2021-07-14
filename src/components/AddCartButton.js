import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class AddCartButton extends React.Component {
  render() {
    const { handleDecrease, handleIncrease, shoppingCart } = this.props;
    return (
      <div>
        <Button
          name="decreaseButton"
          className="decrease-button"
          onClick={ handleDecrease }
          title="-"
          dataTestId="product-decrease-quantity"
        />
        <p data-testid="shopping-cart-product-quantity">{shoppingCart.quantity}</p>
        <Button
          name="increaseButton"
          className="increase-button"
          onClick={ handleIncrease }
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
  shoppingCart: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddCartButton;
