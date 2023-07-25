import React, { useEffect } from "react";
import Layout from "./Layout";

const Messaget = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="TPO Message CITK">
      <div>
        <h1 className="msgh">Faculty-In-Charge Message</h1>
        <p className="msgp">
          Central Institute of Technology Kokrajhar (CITK) located in Bodoland
          Territorial region (BTR) is one of the leading institute in the field
          of software engineering, communication engineering, instrumentation
          engineering, food engineering & technology, civil and construction
          engineering etc. in Assam and North Eastern Region (NER) of India as
          well. The institute has been preferred academic institute of Assam, to
          a large number of organisations for recruiting outstanding employees
          with immense future leaders. The rigorous and flexible academic
          curriculum, exposure to industry and research projects by institute
          has heightened and strengthened their all-round development.
        </p>
        <br />
        <p className="msgp">
          CITK continued to nurture the students for the strong academic
          performance through meticulous academic procedure to enrich
          theoretical concepts, practical understanding and peer learning,
          thereby creating future leaders of society. The combination of bright,
          dedicated students and expert professional faculty members results in
          a great learning environment. CITK is an exciting place to study and
          grow. The Placement Cell of CITK creates a platform where students can
          showcase their talents which different companies seek to explore and
          utilise. It is a place where thinkers become leaders, a place where
          the thirst for knowledge fuels our desire for distinction. The
          presence of vigorous institute-industry collaborations and industrial
          training opportunities help students to excel in competitive
          environment and equipped the students to do extremely well in various
          demanding situations of the corporate world..
        </p>
        <br />
        <p className="msgp">
          {" "}
          Our teaching pedagogy (which includes presentations, case studies,
          live projects, educational and industrial tours and participation in
          seminars and conferences, club activities, sports and cultural
          activities) helps towards acquiring skills sought after and needed by
          organizations. CIT Kokrajhar has provided a perfect environment for
          developing the technical skill, soft skill, managerial skill,
          innovative skill and overall personality of the students in order to
          achieve the desired target in placement. Our aim is to actively assist
          you in attracting and identifying the individuals best suited to your
          needs and in developing a successful recruitment relationship. I also
          express my sincere gratitude to all those organizations that have
          extended their active co- operation to the department in accomplishing
          its endeavour successfully. It is indeed an honour to present our
          students to your esteemed organizations and I look forward to your
          wholehearted cooperation in the placements of our students.{" "}
        </p>
        <br />
        <p className="msgp">
          We highly value our partnership with recruiters, alumni and friends of
          CITK and remain committed to making your recruiting experience
          productive and positive. At the end, I wish you all a bright prospect
          in your future endeavours and hope that the brochure will be
          established as a suitable platform for our students.
        </p>
        <br />
        <p className="cred">Dr. Subhajit Ray</p>
        <p className="cred" style={{ marginBottom: "2vw" }}>
          Faculty-in-Charge(T&P Cell), CIT Kokrajhar
        </p>
      </div>
    </Layout>
  );
};

export default Messaget;
