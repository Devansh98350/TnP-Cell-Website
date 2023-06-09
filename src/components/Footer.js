import React from "react";
import { Link } from "react-router-dom";
import brochurePdf from "../assets/Brochure Coming Soon.pdf";
import amarjeet from "../assets/team23/amarjeet.png";
import devanshu from "../assets/team23/devanshu.jpeg";

const footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer-wrapper">
          <div className="footer-inner-wrapper">
            <div className="footer-col">
              <h2>Contact Us</h2>
              <p>
                Central Institute of Technology Kokrajhar
                <br />
                BTC, Kokrajhar, Assam
                <br />
                India – 783370
              </p>
              <p>
                <a href="mailto:tnpcell@cit.ac.in">
                  tnpcell@cit.ac.in
                </a>
              </p>
            </div>
            <div className="footer-col-parent">
              <a href="https://www.linkedin.com/in/amarjeet-cse/" target="_blank" rel="noopener noreferrer">
                <img src={amarjeet} alt={"amarjeet"} className="footer-img"/>
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">Amarjeet Kumar Singh</p>
                <p className="footer-contact-position">Placement Coordinator</p>
                <p>
                  <a href="tel:+91-8094123615">+91-9065389731</a>
                </p>
                <p> 
                  <a href="mailto:tnpcell@cit.ac.in">
                    tnpcell@cit.ac.in
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col-parent">
              <a href="https://www.linkedin.com/in/devanshu-kumar-20b352237/" target="_blank" rel="noopener noreferrer">
              <img src={devanshu} alt={"devanshu"} className="footer-img"/>
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">Devanshu Kumar</p>
                <p className="footer-contact-position">Placement Coordinator</p>
                <p>
                  <a href="tel:+91-8094123615">+91-9262676870</a>
                </p>
                <p> 
                  <a href="mailto:tnpcell@cit.ac.in">
                   tnpcell@cit.ac.in
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col">
              <h2>Links</h2>
              <p>
                <a
                  href="https://www.cit.ac.in/"
                  target="blank"
                >
                  CITK main site
                </a>
              </p>
              <p>
                <a href={brochurePdf} target="blank">
                  Brochure
                </a>
              </p>
              <p>
              <a href="https://codingclub.cit.ac.in/" target="blank">
                  Coding Club CITK
                </a>
              </p>
              <p>
              <a href="https://www.techcracy22.in/" target="blank">
                  Technical Fest
                </a>
              </p>
              <p>
                <Link to="/">Facilities</Link>
              </p>
              <p>
                <Link to="/alumni-speaks">Alumni Speaks</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
        <strong> SOME RIGHTS RESERVED © 2023 | CITK | Developed
          & Managed By </strong>{" "}
          <a href="https://github.com/Amarjeet2909" target="none">
            <strong>Amarjeet Kumar Singh</strong>
          </a> <strong> & </strong> <a href="https://github.com/Devansh98350" target="none">
            <strong>Devanshu kumar</strong>
          </a>
          {" "}
        </p>
      </div>
    </footer>
  );
};

export default footer;
