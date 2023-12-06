import React from 'react';
import '../../styles/style2.css';

const ImageApproval = () => {
  const handleImageReject = () => {
    // Implement your image rejection logic here
    console.log('Image rejected');
  };

  const handleImageApprove = () => {
    // Implement your image approval logic here
    console.log('Image approved');
  };

  return (
    <div className="main-container">
      <h1>Image Approval</h1>
      <div className="image-wrapper">
        <img src="https://via.placeholder.com/300" alt="Sample Image" />
        <div className="button-container">
          <button className="reject-btn" onClick={handleImageReject}>
            Reject
          </button>
          <button className="approve-btn" onClick={handleImageApprove}>
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageApproval;
