import React from "react";
import { NavLink } from "react-router-dom";

const services = [
  {
    count: "01",
    title: "Consultation and Needs Assessment",
    description:
      "We listen to your vision, requirements, and budget, ensuring a tailored solution.",
  },
  {
    count: "02",
    title: "Concept Development & Layout Preparation",
    description:
      "Landscape plans for drainage problems may also entail planting beds away from the home’s foundation.",
  },
  {
    count: "03",
    title: "Cost Estimation and Budget Planning",
    description:
      "Our team creates innovative concepts, detailed layouts, and 3D renderings for your approval.",
  },
  {
    count: "04",
    title: "Planning, Scheduling, and Obtaining Permits",
    description:
      "We finalize designs, create timelines, and handle all necessary permits and approvals.",
  },
  {
    count: "05",
    title: "Precision Execution with Quality Assurance",
    description:
      "Our skilled team delivers precision work, with rigorous quality control and regular updates.",
  },
  {
    count: "06",
    title: "Handover and Final Walkthrough",
    description:
      "We deliver on time and ensure every detail meets your expectations.",
  },
];

var bgimg1 = require("./../../images/background/bg-5.png");
var bgimg2 = require("./../../images/background/cross-line2.png");

class WhatWeDo2 extends React.Component {
  render() {
    return (
      <>
        <div
          className="section-full  mobile-page-padding bg-white  p-t80 p-b50 bg-repeat overflow-hide"
          style={{ backgroundImage: "url(" + bgimg1 + ")" }}
        >
          <div className="container">
            <div className="large-title-block text-center">
              {/* TITLE START */}
              <div className="section-head">
                <div className="sx-separator-outer separator-center">
                  <div
                    className="sx-separator bg-white bg-moving bg-repeat-x"
                    style={{ backgroundImage: "url(" + bgimg2 + ")" }}
                  >
                    <h3 className="sep-line-one">Our Process</h3>
                  </div>
                </div>
              </div>
              {/* TITLE END */}
            </div>
            <div className="section-content">
              <div className="row number-block-two-outer">
                {services.map((item, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 m-b30"
                    key={index}
                  >
                    <div className="number-block-two animate-in-to-top bdr-gray-light bdr-solid bdr-1">
                      <div className="figcaption bg-white  p-a30">
                        <h4 className="m-t0">{item.title}</h4>
                        <p>{item.description}</p>
                        {/* <NavLink
                          to={"/services-detail"}
                          className="site-button-link"
                        >
                          Read More
                        </NavLink> */}
                        <div className="figcaption-number animate-in-to-top-content">
                          <span>{item.count}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WhatWeDo2;
