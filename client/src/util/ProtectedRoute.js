import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import CheckingToken from "../components/ui/CheckingToken";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [checkingToken, setCheckingToken] = useState(true);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("/validateToken")
      .then((response) => {
        if (response.data.valid) {
          //   setIsLoggedIn(true);
          setCheckingToken(false);
        } else {
          console.log("token invalid");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Token validation error:", error);
        navigate("/login");
      });
  }, [navigate]);

  if (checkingToken) {
    return <CheckingToken />;
  }

  return <div>{children}</div>;
};
export default ProtectedRoute;
