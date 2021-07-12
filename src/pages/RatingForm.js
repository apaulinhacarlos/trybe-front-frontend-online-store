import React from 'react';
import Button from '../components/Button';

class RatingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleQuantity(e, operator) {
    e.preventDefault();
    if (operator === "+") {
      this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
    } else {
      this.setState((prevState) => (
        prevState.quantity > 0 ? ({ quantity: prevState.quantity - 1 }) : ({ quantity: prevState.quantity })));
    }
  }
  render() {
    const { quantity } = this.state;
    const { handleQuantity } = this;
    return (
      <form>
        <h1></h1>
        <img></img>
        <ul></ul>
        <div>
          <Button type="button" title="+" onClick={ (e) => handleQuantity(e, '+') } />
          <span>{ quantity }</span>
          <Button type="button" title="-" onClick={ (e) => handleQuantity(e, '-') } />
          <Button type="button" title="Adicionar ao Carrinho" />
        </div>
      </form>
    );
  }
}

export default RatingForm;
