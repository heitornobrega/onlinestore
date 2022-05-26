import React from 'react';
import PropTypes from 'prop-types';
import Details from '../Components/Details';
import Rate from '../Components/Rate';

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
      const { match: { params: { title } } } = this.props;
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
        </>
      );
    }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
