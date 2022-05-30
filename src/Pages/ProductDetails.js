import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Details from '../Components/Details';
import Rate from '../Components/Rate';
import QuantityManager from '../Components/QuantityManager';

class ProductDetails extends React.Component {
  state = {
    cartLength: 0,
  }

  componentDidMount = () => {
    const cartItems = JSON.parse(localStorage.getItem('items')) || [];
    this.getCartLength(cartItems.length);
  }

  getCartLength = (callback) => {
    this.setState({ cartLength: callback });
  }

  render() {
    const { cartLength } = this.state;
    const { match: { params: { title, id,
      thumbnail, availableQuantity, price } } } = this.props;
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
          getCartLength={ this.getCartLength }
          availableQuantity={ availableQuantity }
        />
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <p data-testid="shopping-cart-size">
            Carrinho de Compras (
            {cartLength}
            )
          </p>
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
      availableQuantity: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
