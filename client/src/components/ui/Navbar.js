import React from "react";
import Logo from "./Logo";
import "../../assets/css/Navbar.css";
import { NavbarData } from "./NavbarData";
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className="sidebar">
      <div className="side">
        <Logo className="small logo" name={<InstagramIcon/>} />
        <Logo className="large logo" name="Photosphere" />
      </div>
      <ul className="sidebarList">
        {NavbarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
        <li className="sidebarMore">
          <button className="sidebarButton">
            <MenuIcon className="menuIcon"/>
            <span>More</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
