import React from 'react';
import PropTypes from 'prop-types';

class QuantityManager extends React.Component {
  addToShoppingCart = () => {
    const { title, price, thumbnail, id, availableQuantity, getCartLength } = this.props;
    let prevItems = JSON.parse(localStorage.getItem('items'));
    if (!prevItems) prevItems = [];
    const lastItem = prevItems[prevItems.length - 1] || { order: 0 };
    prevItems.push({
      title,
      price: parseInt(price, 10),
      thumbnail,
      id,
      order: lastItem.order + 1,
      availableQuantity: parseInt(availableQuantity, 10) });
    getCartLength(prevItems.length);
    localStorage.setItem('items', JSON.stringify(prevItems));
  }

  render() {
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
  getCartLength: PropTypes.func.isRequired,
  availableQuantity: PropTypes.string.isRequired,
};

export default QuantityManager;
