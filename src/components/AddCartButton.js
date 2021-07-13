import React from 'react';
import Button from './Button';

class AddCartButton extends React.Component {
  constructor() {
    super();
    this.state = {
      qtd: 1,
    };

    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
  }

  handleDecrease() {
    this.setState((prevState) => ({
      qtd: prevState.qtd - 1,
    }));
  }

  handleIncrease() {
    this.setState((prevState) => {
      if (prevState.qtd >= 1) {
        return (
          {
            qtd: prevState.qtd + 1,
          }
        );
      }
    });
  }

  render() {
    const { qtd } = this.state;
    const { handleDecrease, handleIncrease } = this;
    return (
      <div>
        <Button
          name="decreaseButton"
          className="decrease-button"
          onClick={ handleDecrease }
          title="-"
        />
        <p data-testid="shopping-cart-product-quantity">{qtd}</p>
        <Button
          name="increaseButton"
          className="increase-button"
          onClick={ handleIncrease }
          title="+"
        />
      </div>

    );
  }
}

export default AddCartButton;
