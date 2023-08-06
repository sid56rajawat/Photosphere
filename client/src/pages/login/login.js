import React from "react";
import { Link } from "react-router-dom";
import AuthenticationLayout from "../../layout/AuthenticationLayout";
import Logo from "../../components/ui/Logo";

function Input({ placeholder, type, name }) {
  return (
    <input type={type} placeholder={placeholder} id={name} name={name}></input>
  );
}

export default function login() {
  return (
    <AuthenticationLayout>
      <div className="container">
        <form action="#" method="post">
          <Logo name="Photosphere" />
          <div className="content">
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
          <div className="button-container">
            <button type="submit">Login</button>
          </div>
          <div className="alert">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </AuthenticationLayout>
  );
}
