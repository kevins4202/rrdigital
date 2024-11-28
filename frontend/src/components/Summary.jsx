import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const Summary = ({setStep, formData}) => {
  return (
    <div id="summary">
      <h2>Summary</h2>
      <h4>Personal Details <a onClick={() => setStep(1)}>Edit</a></h4>
      <p><strong>Full Name:</strong> {formData.fullName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
      <h4>Address Details <a onClick={() => setStep(2)}>Edit</a></h4>
      <p><strong>Address:</strong> {formData.address.street}, {formData.address.city}, {formData.address.state}, {formData.address.postalCode}, {formData.address.country}</p>
      <h4>Identification <a onClick={() => setStep(3)}>Edit</a></h4>
      <p><strong>ID Type:</strong> {formData.idDetails.idType}</p>
      <p><strong>ID Number:</strong> {formData.idDetails.idNumber}</p>
      <p><strong>ID Document:</strong> {formData.idDetails.idDocument.name}</p>
      
    </div>
  );
};

export default Summary;
