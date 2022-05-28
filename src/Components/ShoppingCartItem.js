import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCartItem extends React.Component {
  state = {
    itemQuantity: 1,
  }

  componentDidMount = () => {
    const { itemsQuantities } = this.props;
    this.setState({ itemQuantity: itemsQuantities });
  }

  addToShoppingCart = async () => {
    const { title, price, thumbnail, id, updateItems } = this.props;
    this.setState((prevState) => ({ itemQuantity: prevState.itemQuantity + 1 }));
    let prevItems = JSON.parse(localStorage.getItem('items'));
    if (!prevItems) prevItems = [];
    const order = prevItems[prevItems.length - 1] + 1;
    prevItems.push({ title, price, thumbnail, id, order });
    localStorage.setItem('items', JSON.stringify(prevItems));
    await updateItems();
  }

  removeFromShoppingCart = async () => {
    const { id, updateItems } = this.props;
    console.log('pum');
    this.setState((prevState) => {
      if (prevState.itemQuantity >= 1) {
        return { itemQuantity: prevState.itemQuantity - 1 };
      }
    });
    let prevItems = JSON.parse(localStorage.getItem('items'));
    if (!prevItems) prevItems = [];
    prevItems.reverse();
    const index = prevItems.findIndex((element) => element.id === id);
    prevItems.splice(index, 1);
    prevItems.reverse();
    localStorage.setItem('items', JSON.stringify(prevItems));
    await updateItems();
  }

  render() {
    const { title, price, thumbnail, id } = this.props;
    const { itemQuantity } = this.state;
    return (
      <li data-testid="product" key={ id }>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <button
          type="button"
          onClick={ this.removeFromShoppingCart }
          data-testid="product-decrease-quantity"
          disabled={ itemQuantity <= 1 }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{itemQuantity}</p>
        <button
          type="button"
          onClick={ this.addToShoppingCart }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </li>
    );
  }
}

ShoppingCartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  itemsQuantities: PropTypes.number.isRequired,
  updateItems: PropTypes.func.isRequired,
};

export default ShoppingCartItem;
