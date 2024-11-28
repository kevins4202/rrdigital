import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { User, Mail, Calendar } from 'lucide-react';

const FormStep1 = ({ formData, updateFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value }); // Updates the corresponding field
  };

  return <>
    <h2>Step 1: Personal Details</h2>
    <div className="mb-3">
      <label htmlFor="fullName" className="form-label d-flex align-items-center">
        <User className="me-2 text-muted" size={20} />
        Full Name
      </label>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
      </div>
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label d-flex align-items-center">
        <Mail className="me-2 text-muted" size={20} />
        Email Address
      </label>
      <div className="input-group">
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
    </div>

    <div className="mb-3">
      <label htmlFor="dateOfBirth" className="form-label d-flex align-items-center">
        <Calendar className="me-2 text-muted" size={20} />
        Date of Birth
      </label>
      <div className="input-group">
        <input
          type="date"
          className="form-control"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>
    </div>

  </>
};

export default FormStep1;
