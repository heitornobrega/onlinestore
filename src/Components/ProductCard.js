import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  addToShoppingCart = () => {
    const { title, price, thumbnail, id } = this.props;
    let prevItems = JSON.parse(localStorage.getItem('items'));
    if (!prevItems) prevItems = [];
    prevItems.push({ title, price, thumbnail, id });
    localStorage.setItem('items', JSON.stringify(prevItems));
  }

  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <li data-testid="product">
        <Link
          to={ `/details${id}/${title}/${price}/${thumbnail}` }
          data-testid="product-detail-link"
        >
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
};

export default ProductCard;
