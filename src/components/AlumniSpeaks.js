import React from "react";

import AlokNath from "../assets/alumni/AlokNath.jpeg";
import BhargavDas from "../assets/alumni/BhargavDas.jpeg";
import BijitDas from "../assets/alumni/BijitDas.jpeg";
import DwimaluBrahma from "../assets/alumni/DwimaluBrahma.jpeg";
import JwngsarBasumatary from "../assets/alumni/JwngsarBasumatary.jpeg";
import NinmoyDebnath from "../assets/alumni/NinmoyDebnath.jpeg";
import PrastutiKonch from "../assets/alumni/PrastutiKoch.jpeg";
import PratikRitwick from "../assets/alumni/PratikRitwick.jpeg";
import PrithwirajAdhikary from "../assets/alumni/PrithwirajAdhikary.jpeg";
import RahulRai from "../assets/alumni/RahulRai.jpeg"
import Sajalchakraborty from "../assets/alumni/SajalChakraborty.jpeg";
import SandeepPandey from "../assets/alumni/SandeepPandey.jpeg";
import SanjivPradhan from "../assets/alumni/SanjivPradhan.jpeg"
import TridipJyotiDas from "../assets/alumni/TridipJyotiDas.jpeg"

const AlumniCard = (props) => {
  return (
    <React.Fragment>
      <figure className="snip1559">
        <div className="profile-image">
          <img src={props.img} alt={props.alt} />
        </div>
        <figcaption>
          <h3>{props.name}</h3>
          <p style={{ margin: "0 5px" }}>"{props.message}"</p>
          <p className="contact-detail">
            <strong>Current Company:</strong> {props.company}
          </p>
        </figcaption>
      </figure>
    </React.Fragment>
  );
};

const card = (props) => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">Alumni Speaks</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={AlokNath}
                alt="Alok Nath"
                name="Alok Nath"
                message=" Yet"
                company="Walmart"
              />
              <AlumniCard
                img={SandeepPandey}
                alt="Dr. Sandeep Pandey"
                name="Dr. Sandeep Pandey"
                message="Yet"
                company="Samsung"
              />
              <AlumniCard
                img={PratikRitwick}
                alt="Pratik Ritwick"
                name="Pratik Ritwick"
                message="Yet"
                company="Amazon"
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={SanjivPradhan}
                alt="Sanjiv Pradhan"
                name="Sanjiv Pradhan"
                message="I consider myself very lucky to have received an incredible level of support and guidance from the teaching staff at CIT Kokrajhar. The educators at CIT Kokrajhar are not only highly knowledgeable in their fields but also genuinely dedicated to their students' success. They went above and beyond, making themselves readily available for one-on-one consultations and providing comprehensive explanations."
                company="Klar"
              />
              <AlumniCard
                img={BijitDas}
                alt="Bijit Das"
                name="Bijit Das"
                message="As a former student at CITK, I have fond memories of the institution and a deep appreciation for how it shaped my intellectual and personal growth. I was able to step outside of my comfort zone and push myself past my limitations in the supportive environment of my institution.If it weren't for this place, I wouldn't be where I am."
                company="Cisco"
              />
              <AlumniCard
                img={JwngsarBasumatary}
                alt="Jwngsar Basumatary"
                name="Jwngsar Basumatary"
                message="Yet"
                company="Qualcomm"
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={Sajalchakraborty}
                alt="Sajal Chakraborty"
                name="Sajal Chakraborty"
                message="As a proud alumnus of CITK, I hold cherished memories of my time at our beloved institute. Looking back, I am filled with gratitude for the experiences, friendships, and support that shaped my journey.Our esteemed faculty members are not only knowledgeable but also incredibly supportive. Engage with them, seek their guidance, and let them inspire you to explore new horizons."
                company="Evertz"
              />
              <AlumniCard
                img={PrastutiKonch}
                alt="Prastuti Koch"
                name="Prastuti Koch"
                message="The 4 years of Engineering at CITK was really Amazing.Learnt a lot from the professors and they were very much helpful.Made some really good friends.Participated in the Tech/cultural events organise by college.A memorable journey of college that I'll cherish forever"
                company="LTIMindtree"
              />
              <AlumniCard
                img={PrithwirajAdhikary}
                alt="Prithwiraj Adhikary"
                name="Prithwiraj Adhikary"
                message=" It fills me with immense pride to be a part of the vibrant alumni community of CIT Kokrajhar. As a graduate of the Computer Science and Engineering program, I had the privilege of receiving a quality education that has shaped my career and provided me with a strong foundation."
                company="Fidelity Investments"
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={NinmoyDebnath}
                alt="Ninmoy Debnath"
                name="Ninmoy Debnath"
                message="It is great to say that I got a chance to learn Computer Science and Engineering at CIT Kokrajhar. Also, choosing CSE as a B.Tech course has entirely changed my life. Educators at CIT kokrajhar are not only having high knowledge in their field but also helping students with their career success. Thanks to all my teachers, and friends who helped me to learn and also to my institute for giving me that opportunity."
                company="Dell EMC"
              />
              <AlumniCard
                img={DwimaluBrahma}
                alt="Dwimalu Brahma"
                name="Dwimalu Brahma"
                message="As an alumnus of CIT Kokrajhar, I wanted to reach out and express my heartfelt gratitude for the invaluable education and experiences I gained during my time at your esteemed institution. The knowledge imparted by the exceptional faculty, the diverse community that fostered growth, and the robust support system shaped my character and prepared me for success in the real world. The memories I made and the lifelong friendships I forged are treasured treasures. I am forever indebted to CIT Kokrajhar for laying the foundation of my professional journey. Keep inspiring and nurturing future generations of scholars."
                company="NIC(MeitY)"
              />
              <AlumniCard
                img={BhargavDas}
                alt="Bhargav Das"
                name="Bhargav Das"
                message="Yet"
                company="Siemens Digital"
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={TridipJyotiDas}
                alt="Tridip Jyoti Das"
                name="Tridip Jyoti Das"
                message="Yet"
                company="Geekworkx Tech."
              />
              <AlumniCard
                img={RahulRai}
                alt="Rahul Rai"
                name="Rahul Rai"
                message="CITK holds a special place in our hearts, for it has not only nurtured our minds but also shaped our lives in countless ways.he faculty, with their expertise and unwavering support, inspired us to dream big and pushed us beyond our limits. Their guidance has been instrumental in shaping our careers and instilling in us a lifelong love for learning."
                company="GalaxE.Solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default card;
