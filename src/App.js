import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Component/Header';
import ProductDetails from './Component/ProductDetails';
import ProductListing from './Component/ProductListing';

const App = () => {
  return (
    <div>
     
      <Router>
      <Header />
      <Switch>
      <Route path="/" exact component={ProductListing} />
      <Route path="/product/:productId" exact component={ProductDetails} />
      <Route>404 Not Found</Route>
      </Switch>
      </Router>
    </div>
  )
}

export default App
