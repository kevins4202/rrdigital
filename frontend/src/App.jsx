import { useState } from "react";
import StartPage from "./components/StartPage";
import FormStep1 from "./components/FormStep1";
import FormStep2 from "./components/FormStep2";
import FormStep3 from "./components/FormStep3";
import Summary from "./components/Summary";
import ProgressBar from "./components/ProgressBar";

import NavButtons from "./components/NavButtons";
import { FormContext } from "./contexts/FormContext";
import { useContext } from "react";
import "./App.css";

function App() {
  const { formData, updateFormData } = useContext(FormContext);
  const [step, setStep] = useState(0); // Step 0 for Start Page

  const nextStep = () => {
    if (step === 1 && (formData.fullName === "" || formData.email === "") ||
        step === 2 && (formData.address.street === "" || formData.address.city === "" || formData.address.state === "" || formData.address.postalCode === "" || formData.address.country === "") ||
        step === 3 && (formData.idDetails.idType === "" || formData.idDetails.idNumber === "" || formData.idDetails.idDocument === null)) {
      alert("Please fill in all fields");
      return;
    } 
    setStep(step + 1);
  }
  const prevStep = () => setStep(step - 1);
  const totalSteps = 3;

  const handleSubmit = () => {
    console.log("Form submitted!");
    setStep(0);
  }

  return (
    <form>
      {step > 0 && <ProgressBar step={step} totalSteps={totalSteps + 1} />}
      {step === 0 && <StartPage />}
      {step === 1 && <FormStep1 formData={formData} updateFormData={updateFormData} />}
      {step === 2 && <FormStep2 formData={formData} updateFormData={updateFormData} />}
      {step === 3 && <FormStep3 formData={formData} updateFormData={updateFormData} />}
      {step === 4 && <Summary prevStep={prevStep} />}
      <NavButtons step={step} totalSteps={totalSteps} prevStep={prevStep} nextStep={nextStep} handleSubmit={handleSubmit} />
    </form>
  );
}

export default App;
