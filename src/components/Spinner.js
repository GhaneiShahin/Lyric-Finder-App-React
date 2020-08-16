import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerLoading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '500px' }}
    >
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default SpinnerLoading;
