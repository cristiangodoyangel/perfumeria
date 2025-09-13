import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/checkout" component={CheckoutPage} />
    </Switch>
  </Router>
);

export default Routes;
