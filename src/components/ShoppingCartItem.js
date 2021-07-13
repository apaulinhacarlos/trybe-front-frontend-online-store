import React from 'react';
import { Link } from 'react-router-dom';

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
    // const id = 'MLB1774447998';
    // const title = 'Moto G9 Play Dual Sim 64 Gb Azul-safira 4 Gb Ram';
    // const price = 1093;
    // const thumbnail = 'http://http2.mlstatic.com/D_662487-MLA43910324327_102020-I.jpg';

    const { shoppingCart } = this.props;
    const { title, price, thumbnail, available_quantity } = shoppingCart;
    // const { totalShoppingCart } = this.state;

    return (
      <div>
        <div>
          <img src={ thumbnail } alt={ title } />
          <h3 data-testid="shopping-cart-product-name">{ title }</h3>
          <p>{ `R$ ${price}` }</p>
          <p
            data-testid="shopping-cart-product-quantity"
          >
            { `Qtd.:${available_quantity}` }
          </p>

          {/* <button
            type="button"
            // onClick={ handleDecrease }
          >
            -
          </button>
          <p>quantidade variavel</p>
          <button
            type="button"
            // onClick={ handleIncrease }
          >
            +
          </button> */}

        </div>

        <div>
          <p>Valor total da compra: R$ {`${ 1+1 }`}</p>
        </div>

        <div>
          <button type="button">Finalizar Compra</button>
        </div>
        
      </div>
    );
  }
}

export default ShoppingCartItem;

// return (
//   <div>
//     {products.map((product, index) => (
//       <div key={ index } >
//         <img src={ product.thumbnail } alt={ product.title } />
//         <h3 data-testid="shopping-cart-product-name" >{ product.title }</h3>
//         <span>{ `R$ ${product.price}` }</span>
//         <span data-testid="shopping-cart-product-quantity">{ `Qtd.:${product.available_quantity}` }</span>
//       </div>
//     ))}
//   </div>
// );
