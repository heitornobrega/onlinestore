import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Details from '../Components/Details';
import Rate from '../Components/Rate';
import QuantityManager from '../Components/QuantityManager';

class ProductDetails extends React.Component {
  render() {
    const { match: { params: { title, id, price, thumbnail } } } = this.props;
    return (
      <>
        <Details
          title={ title }
        />
        <QuantityManager
          title={ title }
          id={ id }
          price={ price }
          thumbnail={ thumbnail }
        />
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <Rate id={ id } />
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      price: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
