import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const defaultForm = {
    fullName: "",
    email: "",
    dateOfBirth: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    idDetails: {
      idType: "",
      idNumber: "",
      idDocument: null,
    },
  };
  const [formData, setFormData] = useState(defaultForm);

  const resetFormData = () => {
    setFormData(defaultForm);
  };

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
};
