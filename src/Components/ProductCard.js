import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { result } = this.props;
    console.log(result);
    const { title, original_price: price, thumbnail } = result;
    return (
      <li data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </li>
    );
  }
}

ProductCard.propTypes = {
  result: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductCard;
