const FormStep1 = ({formData, updateFormData}) => {
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value }); // Updates the corresponding field
  };

  return <>
    <div>
      <h2>Step 1: Basic Information</h2>
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
    <div>
      <label>Date of Birth:</label>
      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
      />
    </div>
  </>
};

export default FormStep1;
