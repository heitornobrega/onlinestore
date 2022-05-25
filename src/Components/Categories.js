import React from 'react';
import PropTypes from 'prop-types';

import { getCategories } from '../services/api';

class Categories extends React.Component {
  state = {
    categorias: [],
  };

  componentDidMount() {
    this.pegaCategorias();
  }

  pegaCategorias = async () => {
    const categorias = await getCategories();
    this.setState({ categorias });
  };

  render() {
    const { categorias } = this.state;
    const { callback } = this.props;
    return (
      <>
        {categorias.map((categoria) => (
          <label
            key={ categoria.id }
            htmlFor={ categoria.id }
          >
            <input
              type="radio"
              data-testid="category"
              id={ categoria.id }
              name="categoria"
              value={ categoria.name }
              onChange={ callback }
            />
            { categoria.name }
          </label>
        ))}
      </>
    );
  }
}

Categories.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default Categories;
