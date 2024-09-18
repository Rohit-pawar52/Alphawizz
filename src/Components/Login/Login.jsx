import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp); 
  };

  return (
    <>
      {isSignUp ? (
        <SignUp toggleForm={toggleForm} /> 
      ) : (
        <SignIn toggleForm={toggleForm} /> 
      )}
    </>
  );
}

export default Login;
