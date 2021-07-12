import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCard from './ShoppingCard';
import Loading from './Loading';

class ShoppingList extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };

    this.funcSetState = this.funcSetState.bind(this);
  }

  componentDidMount() {
    this.funcSetState();
  }

  funcSetState() {
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    const { productList } = this.props;

    if (loading) return <Loading />;
    if (productList.length > 0) {
      return (
        <section>
          {productList.map((product) => (<ShoppingCard
            product={ product }
            key={ product.id }
          />))}
        </section>
      );
    }
    if (productList.length === 0) {
      return (
        <section>
          <p>Nenhum produto foi encontrado</p>
        </section>
      );
    }
    return (
      <section />
    );
  }
}

ShoppingList.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ShoppingList;
