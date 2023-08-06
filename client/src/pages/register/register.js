import React from "react";
import { Link } from "react-router-dom";
import AuthenticationLayout from "../../layout/AuthenticationLayout";
import Logo from "../../components/ui/Logo";

function Input({ placeholder, type, name }) {
  return (
    <input type={type} placeholder={placeholder} id={name} name={name}></input>
  );
}

export default function Register() {
  return (
    <AuthenticationLayout>
      <div className="container">
        <form action="#" method="post">
          <Logo name="Photosphere" />
          <div className="content">
            <div className="input-box">
              <Input
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="input-box">
              <Input
                placeholder="Full Name"
                type="text"
                name="fullName"
                required
              />
            </div>
            <div className="input-box">
              <Input
                placeholder="Username"
                type="text"
                name="userName"
                required
              />
            </div>
            <div className="input-box">
              <Input
                placeholder="Password"
                type="password"
                name="password"
                required
              />
            </div>
          </div>
          <div className="alert">
            <p>
              By signing up, you agree to our <a href="#">Terms</a>,{" "}
              <a href="#">Privacy Policy</a> and <a href="#"> Cookies Policy</a>
            </p>
          </div>
          <div className="button-container">
            <button type="submit">Sign Up</button>
          </div>
          <div className="alert">
            <p>
              Already Have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </form>
      </div>
    </AuthenticationLayout>
  );
}
