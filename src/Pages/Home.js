import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <>
        <form>
          <label htmlFor="busca">
            <input type="text" id="busca" />
          </label>
        </form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}
// alteração para commit
export default Home;
