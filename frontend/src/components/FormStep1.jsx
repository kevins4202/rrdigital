import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const FormStep1 = () => {
  const { formData, updateFormData } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value }); // Updates the corresponding field
  };

  return (
    <div>
      <h2>Step 1: Basic Information</h2>
      <form>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default FormStep1;
