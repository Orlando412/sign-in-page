import React, {useState} from "react";


const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


const handleSubmit = (e) => {
  e.preventDefault();
  
};

return(
  <div>
    <h2>Sign In</h2>
    <form onSubmit={handleSubmit}>
      <label>
      Email:
      <input type="email" value={email} onChange={handleEmailChange}></input>
      </label>
      <br />
      <label>
      Password:
      <input type="password" value={password} onChange={handlePasswordChange}></input>
      </label>
      <br />
      <button type='submit'>Sign In</button>
    </form>
  </div>
  );

};

export default SignInForm;

