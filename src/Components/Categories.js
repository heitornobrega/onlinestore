import React from 'react';
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
            />
            { categoria.name }
          </label>
        ))}
      </>
    );
  }
}

export default Categories;
