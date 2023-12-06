import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Auth/Register';
import ProductForm from './components/ProductListing/ProductForm';
import ProductList from './components/ProductListing/ProductList';
import ImageApproval from './components/Admin/ImageApproval';
import Header from './components/Layout/Header';

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <Routes>
          {/* Redirect to login page when root path is accessed */}
          <Route
            path="/"
            element={<Navigate to="/login" />}
          />
          <Route path="/register" component={Register} />
          <Route path="/product/form" component={ProductForm} />
          <Route path="/product/list" component={ProductList} />
          <Route path="/admin/image-approval" component={ImageApproval} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
