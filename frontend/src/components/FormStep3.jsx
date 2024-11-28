import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  FileText,
  CreditCard,
  Hash,
  Upload
} from 'lucide-react';


const FormStep3 = ({ formData, updateFormData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      idDetails: { ...formData.idDetails, [name]: value },
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    updateFormData({
      idDetails: { ...formData.idDetails, idDocument: file },
    });
  };

  return (
    <>
      <h2>Step 3: ID Details</h2>
      <div className="mb-3">
        <label htmlFor="idType" className="form-label d-flex align-items-center">
          <CreditCard className="me-2 text-muted" size={20} />
          Country
        </label>
        <select
          className="form-select"
          id="idType"
          name="idType"
          value={formData.idDetails.idType}
          onChange={handleChange}
          required
        >
          <option value="">Select ID Type</option>
          <option value="passport">Passport</option>
          <option value="driverLicense">Driver's License</option>
          <option value="nationalID">National ID</option>
        </select>
      </div>


      <div className="mb-3">
        <label htmlFor="idNumber" className="form-label d-flex align-items-center">
          <Hash className="me-2 text-muted" size={20} />
          ID Number
        </label>
        <input
          type="text"
          className="form-control"
          id="idNumber"
          name="idNumber"
          value={formData.idDetails.idNumber}
          onChange={handleChange}
          placeholder="Enter ID Number"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="idDocument"
          className="form-label d-flex align-items-center"
        >
          <Upload className="me-2 text-muted" size={20} />
          ID Document
        </label>
        <div className="flex items-center">
          {formData.idDetails.idDocument ? <p>Uploaded File: {formData.idDetails.idDocument.name}</p> : <p>No file uploaded</p>}
          <input
            type="file"
            id="idDocument"
            name="idDocument"
            onChange={handleFileUpload}
            className="w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>
      </div>
    </>
  );
};

export default FormStep3;
