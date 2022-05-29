import React from 'react';
import PropTypes from 'prop-types';

class Rate extends React.Component {
  state = {
    rateEmailInput: '',
    rateTextArea: '',
    starRating: '',
    ratings: [],
  }

  componentDidMount = () => {
    this.updateRatings();
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { id } = this.props;
    const { rateEmailInput, rateTextArea, starRating } = this.state;
    let prevItems = JSON.parse(localStorage.getItem(`ratingsOf${id}`));
    if (!prevItems) prevItems = [];
    prevItems.push({ rateEmailInput, rateTextArea, starRating });
    localStorage.setItem(`ratingsOf${id}`, JSON.stringify(prevItems));
    this.setState({
      rateEmailInput: '',
      rateTextArea: '',
      starRating: '',
    });
    this.updateRatings();
  }

  updateRatings = () => {
    const { id } = this.props;
    let ratings = JSON.parse(localStorage.getItem(`ratingsOf${id}`));
    if (!ratings) ratings = [];
    this.setState({ ratings });
  }

  render() {
    const { rateEmailInput, rateTextArea, ratings } = this.state;
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
              name="rateEmailInput"
              value={ rateEmailInput }
              onChange={ this.handleChange }
            />
            {/* star Rating */}
            <label htmlFor="starRating1">
              <input
                type="radio"
                value="starRating1"
                id="starRating1"
                name="starRating"
                data-testid="1-rating"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="starRating2">
              <input
                type="radio"
                value="starRating2"
                id="starRating2"
                name="starRating"
                data-testid="2-rating"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="starRating3">
              <input
                type="radio"
                value="starRating3"
                id="starRating3"
                name="starRating"
                data-testid="3-rating"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="starRating4">
              <input
                type="radio"
                value="starRating4"
                id="starRating4"
                name="starRating"
                data-testid="4-rating"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="starRating5">
              <input
                type="radio"
                value="starRating5"
                id="starRating5"
                name="starRating"
                data-testid="5-rating"
                onChange={ this.handleChange }
              />
            </label>
            {/* campo de Avaliação */}
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Mensagem(opicional)"
              name="rateTextArea"
              value={ rateTextArea }
              onChange={ this.handleChange }
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
          {ratings.map((rating, index) => {
            const starRate = rating.starRating.match(/.$/);
            return (
              <div key={ `${rating.rateEmailInput}${index}` }>
                <p>{rating.rateEmailInput}</p>
                <p>{`Avaliação de ${starRate} estrela(s)`}</p>
                <p>{ rating.rateTextArea }</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Rate.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Rate;
