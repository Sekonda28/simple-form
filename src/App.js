import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";

import { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formValidated, setFormValidated] = useState(false);
  return (
    <div className="App">
      {!formValidated ? (
        <Form
          setFullName={setFullName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          fullName={fullName}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setFormValidated={setFormValidated}
        />
      ) : (
        <StepTwo
          fullName={fullName}
          email={email}
          password={password}
          setFormValidated={setFormValidated}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
