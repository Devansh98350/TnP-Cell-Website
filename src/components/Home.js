import React, { useState, useEffect } from "react";
import brochurePdf from "../assets/Brochure Coming Soon.pdf";
import { NavLink } from 'react-router-dom';
import buildingsImage from "../assets/images/buildings.jpg";
import convoImage from "../assets/images/convo.jpeg";
import hmou from "../assets/images/hmoc.jpeg";
import Ex from "./ex";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [buildingsImage, convoImage, hmou];

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);
  
 

  return (
    <div>
      <div className="homepic">
        <img src={images[imageIndex]} alt="" className="logo-img" />

      </div>
      <h1 className="elegantshadow">Training & Placement Cell CIT Kokrajhar</h1>
      
      <div class="wrapper">
    <div class="more animate-intro">
       <NavLink to="/recruitment" class="button stroke first" activeClassName="active">
            Recruitment Drive Form
            </NavLink>
        <a class="button stroke second" 
            href={brochurePdf} target="_blank" title="View Our Brochure" rel="noreferrer">
            <i class="fa fa-download"></i> Brochure
        </a>
    </div>
    </div>

    

    <div style={{ backgroundColor: "white" }}>
      <div className="procedure-outerr">
        <div className="procedure-wrappero">
          <h1 className="abt1">About Central Institute of Technology Kokrajhar</h1>
          <h3 className="abt3">(A Deemed-to-be-university under MOE, Govt. of India)</h3>
          <p class="Right">
            Central Institute of Technology (CIT) Kokrajhar, is an esteemed technical institution
            located in Kokrajhar, Assam, India. It was established in 19 December,2006 as one of
            the premier institutes under the Ministry of Education, Government of India.The Institute
            is an autonomous body registered under the Societies Registration Act., 1860 and
            functions under a Board of Governors (BOG).It operates under the mentorship of the Indian
            Institutes of Technology (IITs) and receives substantial support from the Government of
            India. The institute is dedicated to promoting excellence in education and aims to create
            competent professionals who can contribute to the development of the nation. The institute
            is known for its focus on technical education, research, and innovation, and it offers
            undergraduate and postgraduate programs in various fields of engineering, technology, and
            applied sciences.
          </p>
          <p class="Left">
            The institute has well-equipped laboratories, modern classrooms, a well-stocked library, and
            advanced research facilities. It also emphasizes practical learning and industry exposure through
            internships, industrial visits, and collaborative projects. The institute also invites guest lectures
            and organizes seminars, workshops, and conferences to keep the students updated with the latest
            developments in their domains.The institute has various clubs and societies catering to cultural,
            technical, and sports interests. Students actively participate in events and competitions at the
            national and international levels, showcasing their talents and skills. CIT Kokrajhar has developed
            strong ties with industries, research organizations, and other academic institutions, facilitating
            collaborations, internships, and placements for its students. The institute has a dedicated placement
            cell that assists students in securing job opportunities in leading companies and organizations
          </p>
          <p class="Right">
            CIT Kokrajhar is a prestigious technical institute known for its commitment to providing quality
            education, fostering innovation, and nurturing well- rounded professionals. With its strong academic
            foundation, state-of-the-art infrastructure, and industry collaborations, the institute aims to
            contribute to the advancement of technology and promote socio-economic development in the region and beyond.
          </p>
        </div>
      </div>
    </div>
    <Ex />
    </div>
  );
};


export default Home;
