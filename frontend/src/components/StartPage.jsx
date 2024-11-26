const StartPage = ({ onStart }) => {
  return (
    <div className="start-page">
      <h1>Welcome to the KYC Form</h1>
      <p>
        To proceed, we need some information about you to complete the KYC process.
        The process is quick and consists of 3 steps:
      </p>
      <ul>
        <li>Step 1: Basic Information</li>
        <li>Step 2: Address Details</li>
        <li>Step 3: Identification</li>
      </ul>
    </div>
  );
};

export default StartPage;
