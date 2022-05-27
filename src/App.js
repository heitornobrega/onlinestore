import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/shopping-cart"
          render={ (props) => <ShoppingCart { ...props } /> }
        />
        <Route
          path="/details:id/:title/:price/:thumbnail"
          render={ (props) => <ProductDetails { ...props } /> }
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
