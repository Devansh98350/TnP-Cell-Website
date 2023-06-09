import React from "react";
import Card from "./Card";
import agm from "../assets/images/tpo.jpg";
import ifti from "../assets/team23/ifti.jpeg";
import amarjeet from "../assets/team23/amarjeet.png";
import devanshu from "../assets/team23/devanshu.jpeg";
import ashutosh from "../assets/team23/ashutosh.jpg";
import chand from "../assets/team23/chand.jpg";
import pras from "../assets/team23/pras.png";
import rahan from "../assets/team23/rahan.jpg";

const contactUs = () => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">The Team</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={agm}
                alt="Dr. Agile Mathew"
                name="Dr. Agile Mathew"
                isTeacher={false}
                position="Training and Placement Officer"
                email="tnpcell@cit.ac.in"
                linkedin="https://www.linkedin.com/in/agile-mathew-7365a6181/"
                islinkedin={true}                
                isPhone={false}
                isEmail={true}
              />
              <Card
                src={ifti}
                alt="Iftiazur Rahman"
                name="Iftiazur Rahman"
                isTeacher={false}
                position="Overall Coordinator"
                email="tnpcell@cit.ac.in "
                phone="+91-9101176748"
                linkedin=" https://www.linkedin.com/in/iftiazur-rahman-b19192252"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={amarjeet}
                alt="Amarjeet Kumar Singh"
                name="Amarjeet Kumar Singh"
                isTeacher={false}
                position="Placement Coordinator CSE"
                email="tnpcell@cit.ac.in "
                phone="+91-9065389731"
                linkedin="https://www.linkedin.com/in/amarjeet-cse/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={devanshu}
                alt="Devanshu Kumar"
                name="Devanshu Kumar"
                isTeacher={false}
                position="Placement Coordinator CSE"
                phone="+91-9262676870"
                email="tnpcell@cit.ac.in"
                linkedin="https://www.linkedin.com/in/devanshu-kumar-20b352237/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={ashutosh}
                alt="Ashutosh Pandey"
                name="Ashutosh Pandey"
                isTeacher={false}
                position="Placement Coordinator ECE"
                linkedin="https://www.linkedin.com/in/ashutosh-pandey-679b8b25a/"
                islinkedin={true}
                isPhone={false}
                isEmail={false}
              />
              <Card
                src={chand}
                alt="Chandramallika Das"
                name="Chandramallika Das"
                isTeacher={false}
                position="Placement Coordinator Civil Engg."
                linkedin="https://www.linkedin.com/in/chandramallika-das"
                islinkedin={true}
                isPhone={false}
                isEmail={false}
              />
              <Card
                src={pras}
                alt="Prasanta Kumar Deuri"
                name="Prasanta Kumar Deuri"
                isTeacher={false}
                position="Placement Coordinator Civil Engg."
                linkedin="https://www.linkedin.com/in/prasanta-kumar-deuri-728322186"
                islinkedin={true}
                isPhone={false}
                isEmail={false}
              />
              <Card
                src={rahan}
                alt="Rahan Jyoti. Das"
                name="Rahan Jyoti. Das"
                isTeacher={false}
                position="Placement Coordinator FET"
                linkedin="https://www.linkedin.com/in/rahan-jyotikesh-das-826243254"
                islinkedin={true}
                isPhone={false}
                isEmail={false}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contactUs;
