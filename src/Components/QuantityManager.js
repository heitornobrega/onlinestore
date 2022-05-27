import React from 'react';
import PropTypes from 'prop-types';

class QuantityManager extends React.Component {
  addToShoppingCart = () => {
    const { title, price, thumbnail, id } = this.props;
    let prevItems = JSON.parse(localStorage.getItem('items'));
    if (!prevItems) prevItems = [];
    prevItems.push({ title, price, thumbnail, id });
    localStorage.setItem('items', JSON.stringify(prevItems));
  }

  render() {
  //   const { match: { params: { title, id, price, thumbnail } } } = this.props;
    return (
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ this.addToShoppingCart }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

QuantityManager.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default QuantityManager;
