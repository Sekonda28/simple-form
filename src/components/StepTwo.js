const StepTwo = ({ email, fullName, password, setFormValidated }) => {
  return (
    <div className="results-page">
      <h1>Results</h1>
      <ul className="results-table">
        <li>Name: {fullName}</li>
        <li>Email:{email} </li>
        <li>Password : {password} </li>
      </ul>
      <button
        onClick={() => {
          setFormValidated(false);
        }}
      >
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
