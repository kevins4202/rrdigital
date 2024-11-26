const ProgressBar = ({ step, totalSteps }) => {
  const percentage = (step / totalSteps) * 100;
  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;