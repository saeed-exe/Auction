import React, { useState } from 'react';
import '../../styles/style1.css';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [specialFeatures, setSpecialFeatures] = useState('');
  const [startBid, setStartBid] = useState(0);

  const handleFormSubmit = () => {
    // Implement your form submission logic here
    console.log(`Form submitted with product name: ${productName}`);
  };

  return (
    <div className="main-container">
      <h1>Product Form</h1>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <textarea
          placeholder="Special Features"
          value={specialFeatures}
          onChange={(e) => setSpecialFeatures(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="number"
          placeholder="Start Bid"
          value={startBid}
          onChange={(e) => setStartBid(e.target.value)}
        />
      </div>
      <button onClick={handleFormSubmit}>Submit Form</button>
    </div>
  );
};

export default ProductForm;
