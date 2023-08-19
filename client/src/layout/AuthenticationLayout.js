import React from "react";
import Logo from "../components/ui/Logo";
import styles from "../assets/css/auth.module.css";

function authenticationLayout({ children }) {
  return <div className={styles['auth-page']}>{children}</div>;
}

export default authenticationLayout;
