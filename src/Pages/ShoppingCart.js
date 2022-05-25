import React from 'react';

class ShoppingCart extends React.Component {
  state = {
    unfilteredList: JSON.parse(localStorage.getItem('items')) || [],
    productList: [],
    itemsQuantities: {},
  };

  componentDidMount = async () => {
    await this.countItems();
    const { itemsQuantities, unfilteredList } = this.state;
    const uniqueProductIDs = Object.keys(itemsQuantities);
    const productList = uniqueProductIDs.map((id) => (
      unfilteredList.find((item) => item.id === id)
    ));
    this.setState({ productList });
  }

  countItems = () => {
    const { unfilteredList } = this.state;
    const itemsQuantities = unfilteredList.reduce((acc, curr) => {
      if (!acc[curr.id]) acc[curr.id] = 0;
      acc[curr.id] += 1;
      return acc;
    }, {});
    this.setState({ itemsQuantities });
  }

  render() {
    const { productList, itemsQuantities, unfilteredList } = this.state;
    if (!unfilteredList.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <ul>
        {productList.map((product) => {
          const { title, price, thumbnail, id } = product;
          return (
            <li data-testid="product" key={ id }>
              <p data-testid="shopping-cart-product-name">{title}</p>
              <img src={ thumbnail } alt={ title } />
              <p>{price}</p>
              <p data-testid="shopping-cart-product-quantity">{itemsQuantities[id]}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ShoppingCart;
