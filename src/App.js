import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductDetails';
import CheckoutProducts from './Pages/CheckoutProducts';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/shopping-cart"
          render={ (props) => <ShoppingCart { ...props } /> }
        />
        <Route
          path="/details:id/:title/:price/:thumbnail/:availableQuantity/:shipping"
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route
          path="/checkout"
          render={ (props) => <CheckoutProducts { ...props } /> }
        />
        <Route
          path="/"
          render={ (props) => <Home { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
