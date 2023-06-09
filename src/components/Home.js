import React from "react";
import citk from "../assets/images/buildings.jpg";
import brochurePdf from "../assets/Brochure Coming Soon.pdf";
import { NavLink } from 'react-router-dom';

import Ex from "./ex";
const Home = props => (
  <div>
    <div className="homepic">
      <img src={citk} alt="" className="logo-img" />
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



    <Ex />
  </div>
);

export default Home;
