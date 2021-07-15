/*

Componente => ProductList

Requisito(s) correspondente(s) => 5

Descrição => Recebe um array de objetos como props e cria uma div com ProductCard's.
O array é percorrido, criando, para cada objeto, um novo ProductCard, recebendo como props seu respectivo objeto.

Observações => atributo "key" obrigatório para cada elemento criado na função "map".

*/

import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductsList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div data-testid="free-shipping" className=" main-products-section">
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
          />
        ))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default ProductsList;
