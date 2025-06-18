import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './components/lessson16/example/1/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAdd from './components/lessson16/example/1/ProductAdd';
import ProductDetail from './components/lessson16/example/1/ProductDetail';
import ProductEdit from './components/lessson16/example/1/ProductEdit';

function App() {

  return (
      <Routes>
        <Route path='products' element={<Product />}></Route>
        <Route path='products/add' element={<ProductAdd />}></Route>
        <Route path='products/:id' element={<ProductDetail />}></Route>
        <Route path='products/edit/:id' element={<ProductEdit />}></Route>
        <Route path='*' element={<NotFound />}></Route>

      </Routes>
  );
}

function NotFound() {
  return <p>Page not found!</p>
}

export default App;
