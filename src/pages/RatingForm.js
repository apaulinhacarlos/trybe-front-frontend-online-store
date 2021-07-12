import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

class RatingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
      email: '',
    };
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleEmailValue = this.handleEmailValue.bind(this);
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

  handleEmailValue({ target: { value } }) {
    this.setState({ email: value })
  }
  render() {
    const { quantity, email } = this.state;
    const { handleQuantity, handleEmailValue } = this;
    
    return (
      <section>
        <div>
          <h2>Produto</h2>
          <img></img>
          <ul></ul>
        </div>
        <div>
          <h2>Quantidade</h2>
          <Button type="button" title="+" onClick={ (e) => handleQuantity(e, '+') } />
          <span>{ quantity }</span>
          <Button type="button" title="-" onClick={ (e) => handleQuantity(e, '-') } />
          <Button type="button" title="Adicionar ao Carrinho" onClick={ () => console.log('adicionado') }/>
        </div>
        <div>
          <h2>Avaliações</h2>
          <form>
            <Input type="email" value={ email } onChange={ handleEmailValue } />
          </form>
        </div>
      </section>
    );
  }
}

export default RatingForm;
