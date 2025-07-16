import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductListRedux from './components/ProductListRedux';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
        <Route path="/redux" element={<ProductListRedux />} /> {/* ✅ Đây là route bạn test bonus */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
