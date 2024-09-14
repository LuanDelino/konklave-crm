import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductsDetails';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrdersDetails';
import DefaultLayout from './layout/default'; // Verifique o caminho do import
import Users from './pages/Users';
import Config from './pages/Config';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas sem layout */}
        <Route path="/" element={<Login />} />

        {/* Rotas com layout padrão */}
        <Route path="/" element={<DefaultLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrderDetails />} />
          <Route path="users" element={<Users />} />
          <Route path="config" element={<Config />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
