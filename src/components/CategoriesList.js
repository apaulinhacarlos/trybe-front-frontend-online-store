/*

Componente => CategoriesList

Requisito(s) correspondente(s) => 4

Descrição => Recebe um array de objetos como props e cria uma lista não ordenada.
O array é percorrido, criando, para cada objeto, um novo item da lista, contendo o valor da propriedade "name" do objeto.

Observações => atributo "key" obrigatório para cada elemento criado na função "map".
atributo "data-testid" obrigatório para passar no teste de requisito.

*/

import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map((categorie) => (
          <li
            key={ categorie.id }
            data-testid="category"
          >
            { categorie.name }
          </li>
        ))}
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default CategoriesList;
