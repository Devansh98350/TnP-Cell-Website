import React, { Component, Fragment } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import OurRecruiters from "./components/OurRecruiters";
import Procedure from "./components/Procedure";
import WhyCitk from "./components/WhyCitk";
import ContactUs from "./components/ContactUs";
import DirectorMessage from "./components/DirectorMessage";
import TpoMessage from "./components/TpoMessage";
import AerMessage from "./components/AerMessage";
import AboutUs from "./components/aboutUs";
import Courses from "./components/courses";
import Page404 from "./components/404";
import AlumniSpeaks from "./components/AlumniSpeaks";
import recruitment from "./components/recruit";
import mou from "./components/Mou";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
      <Fragment>
        <Navbar />
        <div className="main-page">
          <Switch>
            <Route path="/alumni-speaks" exact component={AlumniSpeaks} />
            <Route path="/" exact component={Home} />
            <Route path="/our-recruiters" exact component={OurRecruiters} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/procedure-and-policies" exact component={Procedure} />
            <Route path="/WhyCitk" exact component={WhyCitk} />
            <Route path="/message/director" exact component={DirectorMessage} />
            <Route path="/message/tpo" exact component={TpoMessage} />
            <Route path="/message/aer" exact component={AerMessage} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/recruitment" exact component={recruitment} />
            <Route path="/mou" exact component={mou} />
            <Route to="/404" component={Page404} />
          </Switch>
        </div>
        <div className="footer-outer-wrapper">
          <Footer />
        </div>
      </Fragment>
      </HashRouter>
    );
  }
}

export default App;
