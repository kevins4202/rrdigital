import { useState } from "react";
import StartPage from "./components/StartPage";
import FormStep1 from "./components/FormStep1";
// import FormStep2 from "./components/FormStep2";
// import FormStep3 from "./components/FormStep3";
// import Summary from "./components/Summary";
import ProgressBar from "./components/ProgressBar";
import { FormProvider } from "./contexts/FormContext";
import "./App.css";

function App() {
  const [step, setStep] = useState(0); // Step 0 for Start Page

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const totalSteps = 3;

  const handleSubmit = () => { 
    console.log("Form submitted!");
    setStep(0);
  }

  return (
    <FormProvider>
      <div className="App">
        {step > 0 && <ProgressBar step={step} totalSteps={totalSteps + 1} />}
        {step === 0 && <StartPage />}
        {step === 1 && <FormStep1 />}
        {/*{step === 2 && <FormStep2 nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <FormStep3 nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Summary prevStep={prevStep} />} */}
        <div className="button-container">
          <button
            className="navigation-button"
            onClick={prevStep}
            disabled={step === 0}
          >
            Back
          </button>
          {step === totalSteps + 1 ? (
            <button
              className="navigation-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              className="navigation-button"
              onClick={nextStep}
              disabled={step === totalSteps + 1}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
