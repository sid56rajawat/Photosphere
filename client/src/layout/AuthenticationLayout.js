import React from "react";
import Logo from "../components/ui/Logo";
import "../assets/css/auth.css";

function authenticationLayout({ children }) {
  return <div className="auth-page">{children}</div>;
}

export default authenticationLayout;
