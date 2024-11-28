import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

const NavButtons = ({ step, totalSteps, prevStep, nextStep, handleSubmit}) => {
  return <>
    <div className="button-container">
      <Button
        variant="primary"
        onClick={prevStep}
        disabled={step === 0}
      >Back</Button>
      
      {step === totalSteps + 1 ? (
        <Button
          variant="primary"
          onClick={handleSubmit}
        >Submit</Button>
      ) : (
        <Button
          variant="primary"
          onClick={nextStep}
        >Next</Button>
      )}
    </div>
  </>
};


export default NavButtons;