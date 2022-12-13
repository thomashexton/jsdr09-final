import { useState } from "react";
import { registerNewUser, signInWithEmail } from "../../firebase";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function updateEmail(event) {
    setEmail(event.target.value);
    console.log(email);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
    console.log(password);
  }

  // function registerUser(event) {
  //   event.preventDefault();
  //   console.log(email, password);

  //   registerNewUser(email, password);
  // }

  function logUserIn(event) {
    event.preventDefault();
    // console.log(email, password);
    signInWithEmail(email, password);
  }

  return (
    <>
      <div className='login-page'>
        <div className='container'>
          <h1>Login</h1>

          <div className='row'>
            <div className='col'>
              <div className='login-form'>
                <form>
                  <div className='form-group'>
                    <input type='text' placeholder='Email' onChange={updateEmail} />
                  </div>
                  <div className='form-group'>
                    <input type='password' placeholder='Password' onChange={updatePassword} />
                  </div>
                  <input className='form-submit' type='submit' value='Submit' onClick={logUserIn} />
                </form>
              </div>
            </div>
          </div>

          {/* <div className='register-form'>
        <h2>Register</h2>
        <form>
          <input type='text' placeholder='Email' onChange={updateEmail} />
          <br />
          <input type='password' onChange={updatePassword} />
          <input type='submit' value='Submit' onClick={registerUser} />
        </form>
      </div> */}
        </div>
      </div>
    </>
  );
}

export default Login;
