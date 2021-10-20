import TodoFeature from "./features";
import AlbumFeature from "./features/Album";
import Counter from "./features/Counter";
import { Route, Link, NavLink } from 'react-router-dom'
import './App.css';
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
// import { useEffect } from "react";
// import productApi from "./api/productApi";

import Header from "components/Header";
import Product from "features/Product";
import ProductFeature from './features/Product/index';
import News from './features/News/index';
import Dashboard from './features/Dashboard/index';


function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 10
  //     }
  //     const ProductList = productApi.getAll(params)
  //     console.log(ProductList);
  //   } 
  //   fetchProducts()
  // },[])

  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" component={News} exact></Route>
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/alumbs" component={AlbumFeature}></Route>
        <Route path="/products" component={ProductFeature}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </div>
  );
}

export default App;
