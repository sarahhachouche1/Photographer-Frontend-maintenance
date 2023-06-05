import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const navigationStyle = ({ isActive }) => ({
  color: isActive ? "gray" : "white",
  textDecoration: "none",
});

export const Header = () => {
  

  // const adminLoggedIn = true;
  // const homePath = adminLoggedIn ? "/dashboard" : "";

  return (
    <div className="header">
      <div className="p">
      <NavLink to={`/`} style={navigationStyle}>
        <img className="logo" src={logo} alt="JAY KHAWAND" />
      </NavLink>
      </div>
      <div className="navigation-bar">
        <NavLink to={`/gallery`} style={navigationStyle}>
          Gallery
        </NavLink>
        <NavLink to={`/services`} style={navigationStyle}>
          Services
        </NavLink>
        <NavLink to={`/shop`} style={navigationStyle}>
          Shop
        </NavLink>
        <NavLink to={`/about`} style={navigationStyle}>
          About
        </NavLink>
        <NavLink to={`/contact`} style={navigationStyle}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
