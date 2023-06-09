import React, { useState } from "react";
import { Collapse, Button } from 'reactstrap';
import { BsCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import wiproLogo from "../assets/company_logos/wipro.jpeg";
import amazonLogo from "../assets/company_logos/amazon.png";
import byjus from "../assets/company_logos/byjus.png"
import cognizant from "../assets/company_logos/cognizant.png"
import accenture from "../assets/company_logos/accenture.png" 
import infosys from "../assets/company_logos/infosys.png"
import walmartglobaltech from "../assets/company_logos/walmartglobaltech.jpeg"
import capgemini from "../assets/company_logos/capgemini.webp"
import csscrop from "../assets/company_logos/csscorp.jpeg"
import vodafone from "../assets/company_logos/vodafone.png"
import agilent from "../assets/company_logos/agilent.png"
import ericsson from "../assets/company_logos/ericsson.png"
import bisleri from "../assets/company_logos/bisleri.png"
import drdo from "../assets/company_logos/drdo.png"
import jio from "../assets/company_logos/jio.jpg"
import invectus from "../assets/company_logos/invectus.png"
import allsec from "../assets/company_logos/allsec.png"
import railway from "../assets/company_logos/IndianRailway.png"
import zaloni from "../assets/company_logos/zaloni.png"
import itcinfotec from "../assets/company_logos/itcinfotec.png"
import indianOil from "../assets/company_logos/IndianOil.png"
import visteon from "../assets/company_logos/visteon.png"
import testbook from "../assets/company_logos/testbook.png"
import mcafee from "../assets/company_logos/mcafee.png"
import evertz from "../assets/company_logos/evertz.jpg"
import simens from "../assets/company_logos/simens.jpg"
import jpmorgan from "../assets/company_logos/jpmorgan.png"
import zwayam from "../assets/company_logos/zwayam.jpg"
import klar from "../assets/company_logos/klar.jpg"
import tiger from "../assets/company_logos/tiger.jpg"
import speakify from "../assets/company_logos/speakify.jpg"
import mindtree from "../assets/company_logos/mindtree.jpg"
import fidelity from "../assets/company_logos/fidelity.png"
import delo from "../assets/company_logos/delo.png"
import syno from "../assets/company_logos/syno.jpg"
import nic from "../assets/company_logos/nic.jpg"
import openfive from "../assets/company_logos/openfive.png"
import quop from "../assets/company_logos/quop.jpg"
import samsung from "../assets/company_logos/samsung.png"
import cisco from "../assets/company_logos/cisco.jpg"
import qualcom from "../assets/company_logos/qualcom.jpg"
import dell from "../assets/company_logos/dell.jpg"
import ct from "../assets/company_logos/ct.jpg"
import cgi from "../assets/company_logos/cgi.jpg"
import intel from "../assets/company_logos/intel.jpg"
import flipcart from "../assets/company_logos/flipcart.jpg"
import hp from "../assets/company_logos/hp.jpg"


const PastRecruiters = props => {
  const [isOpenFirst] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="pr-outer-container">
      <h1 className="pr-main-heading">Our Recruiters</h1>
      <Collapse isOpen={isOpenFirst}>
        <div className="pr-inner-wrapper">
          <div className="pr-inner-box">
            <div className="pr-inner-row">
              <img src={amazonLogo} alt="Amazon" />
              <img src={accenture} alt="Flipkart" />
              <img src={infosys} alt="314ecorp" />
              <img src={cognizant} alt="Acko" />
              <img src={capgemini} alt="Intel" />
            </div>

            <div className="pr-inner-row">
              <img src={wiproLogo} alt="American Express" />
              <img src={csscrop} alt="AMD" />
              <img src={vodafone} alt="BigBasket" />
              <img src={byjus} alt="Byjus" />
              <img src={agilent} alt="Capgemini" />
            </div>

            <div className="pr-inner-row">
              <img src={ericsson} alt="Codenation" />
              <img src={bisleri} alt="cognitio" />
              <img src={drdo} alt="Cognizant" />
              <img src={jio} alt="Cogoport" />
              <img src={invectus} alt="Accenture" />
            </div>

            <div className="pr-inner-row">
              <img src={allsec} alt="Albatronix" />
              <img src={railway} alt="Cred" />
              <img src={zaloni} alt="DarwinBox" />
              <img src={itcinfotec} alt="Deloitte" />
              <img src={indianOil} alt="Dolcera" />
            </div>

            <div className="pr-inner-row">
              <img src={visteon} alt="FIS" />
            </div>

          </div>
        </div>

      </Collapse>

      <Button className="pr-past-heading" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        Our Alumnus is At &nbsp; {isOpen ? < BsFillCaretUpFill /> : <BsCaretDownFill />}
      </Button>
      <Collapse isOpen={isOpen}>
        <div className="pr-inner-wrapper">
          <div className="pr-inner-box">
            <div className="pr-inner-row">
              <img src={walmartglobaltech} alt="Directi" />
              <img src={testbook} alt="testbook" />
              <img src={mcafee} alt="mcafee" />
              <img src={evertz} alt="evertz" />
            </div>

            <div className="pr-inner-row">
              <img src={simens} alt="simens" />
              <img src={jpmorgan} alt="jpmorgan" />
              <img src={zwayam} alt="zwayam" />
              <img src={klar} alt="klar" />
            </div>

            <div className="pr-inner-row">
              <img src={tiger} alt="tiger" />
              <img src={speakify} alt="speakify" />
              <img src={mindtree} alt="mindtree" />
              <img src={fidelity} alt="fidelity" />
            </div>

            <div className="pr-inner-row">
              <img src={delo} alt="delo" />
              <img src={syno} alt="syno" />
              <img src={nic} alt="nic" />
              <img src={openfive} alt="openfive" />
            </div>

            <div className="pr-inner-row">
              <img src={quop} alt="quop" />
              <img src={samsung} alt="samsung" />
              <img src={cisco} alt="cisco" />
              <img src={qualcom} alt="qualcom" />
            </div>

            <div className="pr-inner-row">
              <img src={dell} alt="dell" />
              <img src={ct} alt="ct" />
              <img src={cgi} alt="cgi" />
              <img src={intel} alt="intel" />
            </div>

            <div className="pr-inner-row">
              <img src={flipcart} alt="flipcart" />
              <img src={hp} alt="hp" />
            </div>

            <h3>And many more...</h3>

          </div>
        </div>

      </Collapse>
    </div>

  );
};

export default PastRecruiters;