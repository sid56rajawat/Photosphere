import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationLayout from "../../layout/AuthenticationLayout";
import Logo from "../../components/ui/Logo";
import axios from "axios";
import styles from "../../assets/css/auth.module.css"

export default function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    document.getElementsByClassName(`${styles.user}`)[0].style.display = "none";
    e.preventDefault();
    axios
      .post(
        "/register",
        {
          fullName,
          email,
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
        console.log("response recieved");
        console.log(response);
        let responseMessage = response.data.message;
        if (responseMessage.includes("Username")) {
          document.getElementsByClassName(`${styles.user}`)[0].style.display = "inline";
        } else if (responseMessage.includes("Fields")) {
          alert(responseMessage);
        } else if (responseMessage.includes("user")) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log("Error from client side");
        console.log(err);
      });
  };

  return (
    <AuthenticationLayout>
      <div className={styles["container"]}>
        <form onSubmit={handleSubmit}>
          <Logo name="Photosphere" />
          <div className={styles["content"]}>
            <div className={styles["input-box"]}>
              <input
                placeholder="Email address"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles["input-box"]}>
              <input
                placeholder="Full Name"
                type="text"
                name="fullName"
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <p className={`${styles.invalid} ${styles.user}`}>Invalid username</p>
            <div className={styles["input-box"]}>
              <input
                placeholder="Username"
                type="text"
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className={styles["input-box"]}>
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
              />
            </div>
          </div>
          <div className={styles["alert"]}>
            <p>
              By signing up, you agree to our <a href="#">Terms</a>,{" "}
              <a href="#">Privacy Policy</a> and <a href="#"> Cookies Policy</a>
            </p>
          </div>
          <div className={styles["button-container"]}>
            <button type="submit">Sign Up</button>
          </div>
          <div className={styles["alert"]}>
            <p>
              Already Have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </form>
      </div>
    </AuthenticationLayout>
  );
}
