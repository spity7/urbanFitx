import React from "react";
import { NavLink } from "react-router-dom";

const services = [
  {
    count: "01",
    title: "Commercial Fit-outs",
    description:
      "Office spaces, co-working environments, and corporate interiors.",
  },
  {
    count: "02",
    title: "Residential Fit-outs",
    description: "Customized home interiors, villas, and apartments.",
  },
  {
    count: "03",
    title: "Retail Fit-outs",
    description:
      "Boutiques, showrooms, and retail spaces designed to enhance customer experience.",
  },
  {
    count: "04",
    title: " Hospitality Fit-outs",
    description:
      " Restaurants, cafes, and hotels that combine functionality with style.",
  },
  {
    count: "05",
    title: "Design and Build",
    description:
      "End-to-end solutions from conceptual design to project execution.",
  },
  {
    count: "06",
    title: "Consultation",
    description:
      "We provides tailored advice on space planning, material selection, and cost optimization.",
  },
];

var bgimg1 = require("./../../images/background/bg-5.png");
var bgimg2 = require("./../../images/background/cross-line2.png");

class Services6 extends React.Component {
  render() {
    return (
      <>
        <div
          className="section-full  mobile-page-padding bg-gray  p-t80 p-b50 bg-repeat overflow-hide"
          style={{ backgroundImage: "url(" + bgimg1 + ")" }}
        >
          <div className="container">
            <div className="large-title-block text-center">
              {/* TITLE START */}
              <div className="section-head">
                <div className="sx-separator-outer separator-left">
                  <div
                    className="sx-separator bg-white bg-moving bg-repeat-x"
                    style={{ backgroundImage: "url(" + bgimg2 + ")" }}
                  >
                    <h3 className="sep-line-one">Our Services</h3>
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

export default Services6;
