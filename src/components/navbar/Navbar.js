import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="nav container-fluid d-flex align-items-center justify-content-between m-0 p-0">
      <img src={logo} alt="" className="px-5"/>

      <div className="d-flex align-items-center border border-1 p-2 rounded-pill mid-color-nav">
        <FontAwesomeIcon icon={faMagnifyingGlass}  className="search-icon "/>
        <input type="text" placeholder="Search For Your favorite groups in ATG" className="border-0 max mid-color-nav"/>
      </div>

      <div className="d-flex px-5">
        <li className="px-1 fw-bold">Create Account</li>
        <li className="px-1 fw-bold blue-color-nav" >It's Free!</li>
      </div>
    </nav>
  );
};

export default Navbar;
