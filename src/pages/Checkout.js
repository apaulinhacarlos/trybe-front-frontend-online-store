import React from 'react';
import BuyerForm from '../components/BuyerForm';
import PaymentForm from '../components/PaymentForm';

class Checkout extends React.Component {
  render() {
    return (
      <>
        <div>
          <span>Área onde vou jogar os itens no carrinho</span>
        </div>
        <BuyerForm />
        <PaymentForm />
        <button type="button">Comprar</button>
      </>
    );
  }
}

export default Checkout;
