import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FreeShipping from './FreeShipping';

class ProductCard extends React.Component {
  addToShoppingCart = () => {
    const { title, price, thumbnail, id, availableQuantity, getCartLength } = this.props;
    let prevItems = JSON.parse(localStorage.getItem('items'));
    if (!prevItems) prevItems = [];
    const lastItem = prevItems[prevItems.length - 1] || { order: 0 };
    prevItems.push({
      title, price, thumbnail, id, order: lastItem.order + 1, availableQuantity });
    getCartLength(prevItems.length);
    localStorage.setItem('items', JSON.stringify(prevItems));
  }

  render() {
    const { title, price, thumbnail, id, availableQuantity, shipping } = this.props;
    return (
      <li data-testid="product">
        <Link
          to={
            `/details${id}/${title}/${price}/
            ${encodeURIComponent(thumbnail)}/${availableQuantity}/${shipping}`
          }
          data-testid="product-detail-link"
        >
          { shipping && <FreeShipping /> }
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addToShoppingCart }
        >
          Adicionar ao carrinho
        </button>
      </li>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getCartLength: PropTypes.func.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  shipping: PropTypes.bool.isRequired,
};

export default ProductCard;
