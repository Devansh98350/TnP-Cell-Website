import React from "react";
import fic from "../assets/images/sjr.jpg";
import pks from "../assets/images/pranav.jpg";
import director from "../assets/images/hkk.jpg";
import { NavLink } from "react-router-dom";

const Ex = props => (
  <div className="example">
    <div className="blog-card">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${director})` }} />
        <ul className="details">
          <li className="author">Prof. Hemanta Kumar Kalita</li>
          <li className="date">Director</li>
          <li className="tags">
            <ul>
              <li>CIT</li>
              <li>Kokrajhar</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>Our Vision</h1>
        <h2>From Director's desk</h2>
        <p>
          {" "}
          Dear Students, faculty, and esteemed guests,
It gives me great pleasure to extend a warm welcome to all of you as we unveil the
upgraded Training and Placement (T&amp;P) Cell website at the Central Institute of
Technology (CIT) Kokrajhar.{" "}
        </p>
        <p className="read-more">
          <NavLink to="/message/director" exact className="activeclass">
            Read More..
          </NavLink>
        </p>
      </div>
    </div>

    <div className="blog-card alt">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${fic})` }} />
        <ul className="details">
          <li className="author">Dr. Subhajit Ray</li>
          <li className="date">Faculty-In-Charge of T&P Cell</li>
          <li className="tags">
            <ul>
              <li>CIT</li>
              <li>Kokrajhar</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>Exploring the skies</h1>
        <h2>The Training and Placement cell </h2>
        <p>
        Central Institute of Technology Kokrajhar (CITK) located in Bodoland Territorial region
(BTR) is one of the leading institute in the field of software engineering, communication
engineering, instrumentation engineering, food engineering & technology, civil and
construction engineering etc.
      {" "}
        </p>
        <p className="read-more">
          <NavLink to="/message/tpo" exact className="activeclass">
            Read More..
          </NavLink>
        </p>
      </div>
    </div>

    <div className="blog-card">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${pks})` }} />
        <ul className="details">
          <li className="author">Dr. Pranav Kumar Singh</li>
          <li className="date">Dean Alumni & External Relations</li>
          <li className="tags">
            <ul>
              <li>CIT</li>
              <li>Kokrajhar</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h2>Dean Alumni & External Relations Office </h2>
        <p>
        I am delighted to address you as the Dean of Alumni and External Relations for the Training and Placement department 
        of CIT Kokrajhar. It gives me immense pleasure to share with you the remarkable achievements of our alumni...{" "}
        </p>
        <p className="read-more">
          <NavLink to="/message/aer" exact className="activeclass">
            Read More..
          </NavLink>
        </p>
      </div>
    </div>
  </div>
);

export default Ex;
