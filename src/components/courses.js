import React from "react";
import SubCard1 from "./sub-cardCse";
import SubCard2 from "./sub-cardEce";
import {semList1} from "./semListCse";
import {semList2} from "./semListEce";

const Courses = () => (
  <React.Fragment>
    <div className="courses-outer-wrapper">
      <div className="courses">
        <h1>Courses</h1>
        <ul>
          <li>B.Tech.</li>
        </ul>
        <p className="Computer Science and Engineering">
          This course is surely the best in the country. Its strength is its
          adaptability to the changing industry requirements. A student gets
          knowledge of the latest technologies, in addition to ample industry
          exposure. The students are given a choice of subject from the 5th
          semester itself in the form of electives. The students have ample
          practical knowledge owing to the mini projects taken up in their 6th,
          and major in 7th & 8th semesters. Apart from this, the students are required to
          submit an industrial project in their 7th semester. The course
          includes both theory and lab sessions. The curriculum emphasizes
          importance of applied knowledge, and promotes state-of-the-art
          teaching and learning.
        </p>
        <button disabled>Computer Science and Engineering</button>
      </div>
    </div>
    <div className="course-outer">
      <div className="course-inner">
        {semList1.map((val, index) => (
          <SubCard1 semNum={val} sem={val} ind={index} key={val + index} />
        ))}
      </div>
    </div>
 

    <div className="courses-outer-wrapper">
      <div className="courses">
        <p className="Electronics and Communication Engineering">
        </p>
        <button disabled>Electronics and Communication Engineering</button>
      </div>
    </div>
    <div className="course-outer">
      <div className="course-inner">
        {semList2.map((val, index) => (
          <SubCard2 semNum={val} sem={val} ind={index} key={val + index} />
        ))}
      </div>
    </div>
    
  </React.Fragment>
  
  
  
);

export default Courses;
