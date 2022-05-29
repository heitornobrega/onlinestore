import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartItem from '../Components/ShoppingCartItem';

class ShoppingCart extends React.Component {
  state = {
    unfilteredList: [],
    productList: [],
    itemsQuantities: {},
  };

  componentDidMount = () => {
    this.updateItems();
  }

  updateItems = async () => {
    await this.setState({
      unfilteredList: JSON.parse(localStorage.getItem('items')) || [],
    });
    await this.countItems();
    const { itemsQuantities, unfilteredList } = this.state;
    const uniqueProductIDs = Object.keys(itemsQuantities);
    const productList = uniqueProductIDs.map((id) => (
      unfilteredList.find((item) => item.id === id)
    ));
    productList.sort((a, b) => a.order - b.order);
    this.setState({ productList, itemsQuantities });
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
    const { itemsQuantities, unfilteredList, productList } = this.state;
    if (!unfilteredList.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        <Link to="/checkout" data-testid="checkout-products">Continuar compra</Link>
        <ul>
          {productList.map((product) => {
            const { title, price, thumbnail, id, availableQuantity } = product;
            return (
              <ShoppingCartItem
                key={ id }
                id={ id }
                title={ title }
                price={ price }
                thumbnail={ thumbnail }
                itemsQuantities={ itemsQuantities[id] }
                updateItems={ this.updateItems }
                availableQuantity={ availableQuantity }
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ShoppingCart;
