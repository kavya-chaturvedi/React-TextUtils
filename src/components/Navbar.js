import React from "react";
import { Link } from "react-router-dom";



import PropTypes from "prop-types";


export default function Navbar(props) {
  return (
    <>
    
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.brandName}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.navItem1}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.navItem2}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {props.navItem3}
                </Link>
              </li>
              <li className="nav-item">
                {/* <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type={props.inputType}
                    placeholder={props.placeHolder}
                    aria-label="Search"
                  /> */}
                {/* <button className="btn btn-outline-success" type={props.buttontype}>
                    {props.buttonText}
                  </button> */}
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    onClick={props.toggleMode}
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className={`form-check-label text-${props.mode==="light" ? "dark": "light"}`}
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Dark Mode
                  </label>
                </div>
                {/* </form> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string.isRequired,
  navItem1: PropTypes.string.isRequired,
  navItem2: PropTypes.string.isRequired,
  navItem3: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  buttontype: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  brandName: "Brand name",
  navItem1: "First Nav item",
  navItem2: "Second Nav item",
  navItem3: "Third Nav item",
  inputType: "Input type",
  placeHolder: "Placeholder",
  buttontype: "Button Type",
  buttonText: "Button Text",
};
