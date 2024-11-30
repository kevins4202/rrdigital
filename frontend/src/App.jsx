import { useState } from "react";
import StartPage from "./components/StartPage";
import FormStep1 from "./components/FormStep1";
import FormStep2 from "./components/FormStep2";
import FormStep3 from "./components/FormStep3";
import Summary from "./components/Summary";
import ProgressBar from "./components/ProgressBar";
import { BSON } from "bson";
import NavButtons from "./components/NavButtons";
import { FormContext } from "./contexts/FormContext";
import { useContext } from "react";
import "./App.css";
import formService from "./services/formService";

function App() {
  const { formData, updateFormData, resetFormData } = useContext(FormContext);
  const [step, setStep] = useState(0); // Step 0 for Start Page
  const [file, setFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const nextStep = () => {
    if ((step === 1 &&
      (formData.fullName === "" ||
        formData.email === "" ||
        !emailRegex.test(formData.email) ||
        formData.dateOfBirth === "")) ||
      (step === 2 &&
        (formData.address.street === "" ||
          formData.address.city === "" ||
          formData.address.state === "" ||
          formData.address.postalCode === "" ||
          !Number.isInteger(Number(formData.address.postalCode)) || // Convert postalCode to number before checking
          formData.address.country === "")) ||
      (step === 3 &&
        (formData.idDetails.idType === "" ||
          formData.idDetails.idNumber === "" ||
          formData.idDetails.idDocument === null))) {
      alert("Please fill in all fields correctly");
      return;
    }
    setStep(step + 1);
  }
  const prevStep = () => setStep(step - 1);
  const totalSteps = 3;

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0]; // Get the selected file
    setFile(uploadedFile);
  };

  const handleSubmit = async () => {
    try {
      if (formData.idDocument) {
        const fileBson = BSON.serialize({
          filename: formData.idDocument.name,
          mimetype: formData.idDocument.type,
          content: new Uint8Array(await formData.idDocument.arrayBuffer()), // Convert file to Uint8Array
        });

        // Add the BSON-serialized file to formData
        formData.idDocument = fileBson;
      } else {
        console.log("No file uploaded");
      }

      console.log("Submitting form data from App.jsx:", formData);

      // Submit the form
      await formService.submitForm(formData);

      setShowSuccess(true);
      resetFormData();
      setStep(0);

      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error(error);
    }
  }

  return <>
    <div className="success-section">
      {showSuccess && (
        <div className="success-message">
          Form submitted successfully!
        </div>
      )}
    </div>
    <form>
      {step > 0 && <ProgressBar step={step} totalSteps={totalSteps + 1} />}
      {step === 0 && <StartPage />}
      {step === 1 && <FormStep1 formData={formData} updateFormData={updateFormData} />}
      {step === 2 && <FormStep2 formData={formData} updateFormData={updateFormData} />}
      {step === 3 && <FormStep3 formData={formData} updateFormData={updateFormData} handleFileUpload={handleFileUpload} />}
      {step === 4 && <Summary setStep={setStep} formData={formData} />}
      <NavButtons step={step} totalSteps={totalSteps} prevStep={prevStep} nextStep={nextStep} handleSubmit={handleSubmit} />
    </form>
  </>
}

export default App;
