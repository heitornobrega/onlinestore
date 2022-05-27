import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Details from '../Components/Details';
import Rate from '../Components/Rate';
import QuantityManager from '../Components/QuantityManager';

class ProductDetails extends React.Component {
    state = {
      rateInputEmail: '',
      rateTextArea: '',
    }

    handleChange = (event) => {
      const { value, name } = event.target;
      this.setState({
        [name]: value,
      });
    }

    render() {
      const { match: { params: { title, id, price, thumbnail } } } = this.props;
      const { rateTextArea, rateInputEmail } = this.state;
      return (
        <>
          <Details
            title={ title }
          />
          <Rate
            rateInputEmail={ rateInputEmail }
            rateTextArea={ rateTextArea }
            handleChange={ this.handleChange }
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
