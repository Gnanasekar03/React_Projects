import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  const menuref = useRef();
  const openMenu = () => {
    menuref.current.style.right = "0";
  };
  const closeMenu = () => {
    menuref.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <h1>
        <span>G</span>nana<span>s</span>ekar
      </h1>
      <img src={menu_open} alt="" onClick={openMenu} className="nav-mob-open" />
      <ul ref={menuref} className="nav-menu">
        <img
          src={menu_close}
          alt=""
          onClick={closeMenu}
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#Home">
            <p onClick={() => setMenu("Home")}>Home</p>
          </AnchorLink>
          {menu == "Home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#About">
            <p onClick={() => setMenu("About")}>About me</p>
          </AnchorLink>
          {menu == "About" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Service">
            <p onClick={() => setMenu("Service")}>Service</p>
          </AnchorLink>
          {menu == "Service" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Work">
            <p onClick={() => setMenu("Work")}>Portfolio</p>
          </AnchorLink>
          {menu == "Work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Contact">
            <p onClick={() => setMenu("Contact")}>Contact</p>
          </AnchorLink>
          {menu == "Contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#Contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
