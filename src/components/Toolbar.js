import React from "react";
import { NavLink, Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import brochurePdf from "../assets/Brochure Coming Soon.pdf";

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <ToggleButton click={props.sideDrawerToggler} />
      </div>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="logo">Placement Cell CITK</div>
      </Link>
      <div className="spacer" />
      <div className="nav-elements">
        <ul>
          <li>
            <NavLink to="/about-us" exact className="activeclass">
              About Us
            </NavLink>
          </li>
          <li className="dropdownmenu">
            <button className="dropbtn">
              <span>Academics </span>
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <NavLink to="/courses" exact className="activeclass">
                Courses
              </NavLink>
              <NavLink to="/" exact className="activeclass">
                Demographics
              </NavLink>
              <NavLink to="/mou" exact className="activeclass">
                MOU's
              </NavLink>
              <NavLink to="" exact className="activeclass">
                Technical Clubs
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink to="/our-recruiters" exact className="activeclass">
              Our Recruiters
            </NavLink>
          </li>
          <li>
          <a href={brochurePdf} className="activeclass" target="blank">
             Brochure
          </a>
          </li>
          <li className="dropdownmenu">
            <button className="dropbtn">
              <span>Why Us </span>
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <NavLink to="/WhyCitk" exact className="activeclass">
                Why CITK
              </NavLink>
              <NavLink to="/alumni-speaks" exact className="activeclass">
                Our Alumni
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink to="/procedure-and-policies" exact className="activeclass">
              Procedure
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" exact className="activeclass">
              Team
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
