import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const FormStep2 = () => {
  const { formData, updateFormData } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      address: { ...formData.address, [name]: value },
    });
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <form>
        <div>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={formData.address.street}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.address.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.address.postalCode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.address.country}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default FormStep2;
