import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        {/* <p> `R$ ${precoDoProduto}`</p>
                <img src={urlDaImagemDoProduto} alt={imagemDoProduto} /> */}
      </div>
    );
  }
}

Details.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Details;
