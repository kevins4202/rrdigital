import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const FormStep3 = () => {
  const { formData, updateFormData } = useContext(FormContext);

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
    <div>
      <h2>Step 3: ID Details</h2>
      <form>
        <div>
          <label>ID Type:</label>
          <select
            name="idType"
            value={formData.idDetails.idType}
            onChange={handleChange}
          >
            <option value="">Select ID Type</option>
            <option value="passport">Passport</option>
            <option value="driverLicense">Driver's License</option>
            <option value="nationalID">National ID</option>
          </select>
        </div>
        <div>
          <label>ID Number:</label>
          <input
            type="text"
            name="idNumber"
            value={formData.idDetails.idNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>ID Document (Upload):</label>
          <input
            type="file"
            name="idDocument"
            onChange={handleFileUpload}
          />
        </div>
      </form>
    </div>
  );
};

export default FormStep3;
