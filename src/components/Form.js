const Form = ({
  setFullName,
  setEmail,
  setPassword,
  setConfirmPassword,
  fullName,
  email,
  password,
  confirmPassword,
  setFormValidated,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    password !== confirmPassword
      ? alert("Vos deux mots de passe ne sont pas identique")
      : setFormValidated(true);
  };

  return (
    <div className="form-page">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          onChange={(event) => {
            setFullName(event.target.value);
          }}
          type="text"
          placeholder="Matt Caswell"
          value={fullName}
        />
        <span>Email</span>
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="email"
          placeholder="matt@caswell.com"
          value={email}
        />
        <span>Password</span>
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          placeholder="abc123"
          value={password}
        />
        <span>Confirm your password</span>
        <input
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          type="password"
          placeholder="abc123"
          value={confirmPassword}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
