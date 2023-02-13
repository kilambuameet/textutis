import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Css/atag.css";

export default function Navbar(props) {
  // const z = "manish";
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand alink mx-1" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-Link active alink mx-1"
                aria-current="page"
                to="/"
                // className=""
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link alink mx-1" to="/about">
                {props.abouttitle}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div
            className={`form-check form-switch text-{
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.togglestyle}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.modetitle}
            </label>
          </div>
          {/* <div
            className={`form-check form-switch text-{
              props.greendarkmode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.gdarkmode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            />
          </div> */}
        </div>
      </div>
    </nav>
  );
}
///////////////////props Tyes dynamic method //////////////////
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttitle: PropTypes.string,
};
///////////////////////////////Default Props Declaration////////////////////
// Navbar.defaultProps = { title: "manish", abouttitle: "hyongoju" };
