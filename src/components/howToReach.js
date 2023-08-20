import { useEffect } from "react";
import React from 'react';
import railway from "../assets/images/railway.png";
import airport from "../assets/images/airport.png";
import roadways from "../assets/images/roadways.png";

const BoxComponent = () => {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="box-container">
      <div className="box">
        <div className="box-image">
          <img src={railway} alt="Image 1" />
        </div>
        <div className="box-content">
          <h1>Railways</h1>
          <p>The nearest railway station to CIT Kokrajhar is the Kokrajhar Railway Station. Situated just 10 kilometers 
            away from the institute, this station serves as a vital gateway for students, faculty, and visitors alike.</p>
        </div>
      </div>
      <div className="box">
        <div className="box-image">
          <img src={airport} alt="Image 2" />
        </div>
        <div className="box-content">
          <h1>Airways</h1>
          <p>Reaching CIT Kokrajhar by air offers a swift and comfortable way to access this esteemed institution nestled in the heart of Assam,
             India. The nearest airport to CIT Kokrajhar is Rupsi Airport (RUP). Located at a distance of 75KM , Rupsi Airport serves 
             as a pivotal gateway for students, faculty, and visitors traveling by air.</p>
        </div>
      </div>
      <div className="box">
        <div className="box-image">
          <img src={roadways} alt="Image 3" />
        </div>
        <div className="box-content">
          <h1>Roadways</h1>
          <p>The nearest major highway to CIT Kokrajhar is NH27 (National Highway 27). This well-connected highway plays a crucial role in connecting various 
            regions and provides a convenient route to reach CIT Kokrajhar.</p>
        </div>
      </div>
    </div>
  );
};

export default BoxComponent;

