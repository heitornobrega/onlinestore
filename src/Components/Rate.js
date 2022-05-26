import React from 'react';
import PropTypes from 'prop-types';

class Rate extends React.Component {
    handleClick = () => {
      console.log('clicou');
    }

    render() {
      const { rateInputEmail, rateTextArea, handleChange } = this.props;
      return (
        <div>
          <h1>Avaliações</h1>
          <div>
            <form>
              {/* input do E-mail */}
              <input
                data-testid="product-detail-email"
                type="email"
                placeholder="Email"
                name="rateInputEmail"
                value={ rateInputEmail }
                onChange={ handleChange }
              />
              {/* star Rating */}
              <label htmlFor="starRating1">
                <input type="checkbox" id="starRating1" data-testid="1-rating" />
              </label>
              <label htmlFor="starRating2">
                <input type="checkbox" id="starRating2" data-testid="2-rating" />
              </label>
              <label htmlFor="starRating3">
                <input type="checkbox" id="starRating3" data-testid="3-rating" />
              </label>
              <label htmlFor="starRating4">
                <input type="checkbox" id="starRating4" data-testid="4-rating" />
              </label>
              <label htmlFor="starRating5">
                <input type="checkbox" id="starRating5" data-testid="5-rating" />
              </label>
              {/* campo de Avaliação */}
              <textarea
                data-testid="product-detail-evaluation"
                placeholder="Mensagem(opicional)"
                name="rateTextArea"
                value={ rateTextArea }
                onChange={ handleChange }
              />
              {/* botão para salvar */}
              <button
                data-testid="submit-review-btn"
                type="button"
                onClick={ this.handleClick }
              >
                Avaliar
              </button>
            </form>
          </div>
          <div>
            {/* Container das Avaliações salvas */}
          </div>
        </div>
      );
    }
}

Rate.propTypes = {
  rateInputEmail: PropTypes.string.isRequired,
  rateTextArea: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Rate;
