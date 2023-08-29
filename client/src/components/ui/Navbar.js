import React from "react";
import Logo from "./Logo";
import "../../assets/css/Navbar.css";
import { NavbarData } from "./NavbarData";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sidebar">
      <div className="side">
        <Logo className="small logo" name={<InstagramIcon />} />
        <Logo className="large logo" name="Photosphere" />
      </div>
      <ul className="sidebarList">
        {NavbarData.map((val, key) => {
          return (
            <li key={key}>
              <Link to={val.link} className="row">
                <div className="icon">{val.icon}</div>
                <div className="title">{val.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <button id="more-button" className="row">
        <MenuIcon />
        <span>More</span>
      </button>
    </div>
  );
}

export default Navbar;
