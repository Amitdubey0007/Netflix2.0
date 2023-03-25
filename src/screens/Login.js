// import { set } from "immer/dist/internal";
import React, { useState } from "react";
import "./Login.css";
import SignInScreen from "./SignInScreen";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="login_background">
        <img
          className="login_logo"
          src="https://www.freepnglogos.com/uploads/black-netflix-logo-png-4.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="login_button">
          Sign In
        </button>
        <div className="login_gradient" />
      </div>
      <div className="login_body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films, TV Programmes and more</h1>
            <h2>Watch anywhere.Cancel at anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login_GetStarted">
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
