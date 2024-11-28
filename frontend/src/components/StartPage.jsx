import { CheckCircle } from 'lucide-react';
import React from 'react';

const StartPage = ({ }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <h1 className="card-title text-center mb-4 text-primary">Know Your Customer</h1>

            <p className="text-center text-muted mb-4">
              To proceed, we need some information about you to complete the process.
              The process is quick and consists of 3 steps:
            </p>

            <div className="list-group mb-4">
              <div className="list-group-item list-group-item-action d-flex align-items-center">
                <span className="badge bg-primary me-3">1</span>
                <span>Basic Information</span>
              </div>
              <div className="list-group-item list-group-item-action d-flex align-items-center">
                <span className="badge bg-primary me-3">2</span>
                <span>Address Details</span>
              </div>
              <div className="list-group-item list-group-item-action d-flex align-items-center">
                <span className="badge bg-primary me-3">3</span>
                <span>Identification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default StartPage;
