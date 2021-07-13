import React from 'react';
import PropTypes from 'prop-types';
import ProductsCard from './ProductCard';

class ProductsList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => (
          <ProductsCard
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
