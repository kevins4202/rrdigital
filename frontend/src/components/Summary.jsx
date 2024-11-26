import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const Summary = ({ prevStep }) => {
  const { formData } = useContext(FormContext);

  return (
    <div>
      <h2>Summary</h2>
      <p><strong>Full Name:</strong> {formData.fullName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
      <p><strong>Address:</strong> {formData.address.street}, {formData.address.city}, {formData.address.state}, {formData.address.postalCode}, {formData.address.country}</p>
      <p><strong>ID Type:</strong> {formData.idDetails.idType}</p>
      <p><strong>ID Number:</strong> {formData.idDetails.idNumber}</p>
      
    </div>
  );
};

export default Summary;
