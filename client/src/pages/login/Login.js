import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationLayout from "../../layout/AuthenticationLayout";
import Logo from "../../components/ui/Logo";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [checkingToken, setCheckingToken] = useState(true);

  useEffect(() => {
    // Check if the user already has a valid token
    // Validate token with server
    axios.defaults.withCredentials = true;
    axios
      .get("/validateToken")
      .then((response) => {
        if (response.data.valid) {
          navigate("/home");
        } else {
          setCheckingToken(false);
        }
      })
      .catch((error) => {
        setCheckingToken(false);
      });
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "/login",
        {
          userName,
          password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        const responseMessage = response.data.message;
        if (responseMessage.includes("Correct")) {
          navigate("/home");
        } else {
          alert(responseMessage);
        }
      })
      .catch((err) => {
        console.log("Error from client side");
        console.log(err);
      });
  };

  if (checkingToken) {
    return <div>Validating Token...</div>;
  }

  return (
    <AuthenticationLayout>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Logo name="Photosphere" />
          <div className="content">
            <div className="input-box">
              <input
                placeholder="Username"
                type="text"
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
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
