import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <>
        <form>
          <label htmlFor="busca">
            <input type="text" id="busca" />
          </label>
        </form>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}
// alteração para commit
export default Home;
