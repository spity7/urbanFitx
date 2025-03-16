import React, { useState } from "react";
import Header2 from "../Common/Header2";
import Footer from "../Common/Footer";
import Slider2 from "./../Elements/Slider2";
import About2 from "./../Elements/About2";
import WhatWeDo2 from "./../Elements/WhatWeDo2";
import Projects2 from "./../Elements/Projects2";
import Team2 from "./../Elements/Team2";
import Services2 from "./../Elements/Services2";
import Blog1 from "./../Elements/Blog1";
import Statistics1 from "./../Elements/Statistics1";
import Testimonials2 from "./../Elements/Testimonials2";
import Services1 from "../Elements/Services1";
import Projects1 from "../Elements/Projects1";

var bgimg1 = require("./../../images/main-slider/slider2/interior_fit-out_gyrx6hd11lyk0zixd3ua_3.png");
var bgimg2 = require("./../../images/main-slider/slider2/modern_interior_design_reception_with_marble_counter_osu7w1plv85mnebjqwhx_3.png");

const Home2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const sections = [
    {
      title: "Consultation and Needs Assessment",
      content:
        "We listen to your vision, requirements, and budget, ensuring a tailored solution.",
    },
    {
      title: "Concept Development & Layout Preparation",
      content:
        "Our team creates innovative concepts, detailed layouts, and 3D renderings for your approval.",
    },
    {
      title: "Cost Estimation and Budget Planning",
      content:
        "We provide transparent cost estimates to align with your budget.",
    },
    {
      title: "Planning, Scheduling, and Obtaining Permits",
      content:
        "We finalize designs, create timelines, and handle all necessary permits and approvals.",
    },
    {
      title: "Precision Execution with Quality Assurance",
      content:
        "Our skilled team delivers precision work, with rigorous quality control and regular updates.",
    },
    {
      title: "Handover and Final Walkthrough",
      content:
        "We deliver on time and ensure every detail meets your expectations.",
    },
    {
      title: "Post-Project Support and Maintenance",
      content:
        "We offer ongoing support and maintenance to keep your space in perfect condition.",
    },
  ];

  return (
    <>
      <Header2 />

      <div className="page-content">
        <Slider2 />
        <About2 />
        {/* <WhatWeDo2 /> */}
        <Services2 />
        <Projects1 />
        {/* <WhatWeDo2 /> */}

        <div className="section-full p-t80 p-b80 inner-page-padding">
          <div className="container">
            <div className="faq-1">
              {/* TITLE START */}
              <div className="section-head">
                <div className="sx-separator-outer separator-center">
                  <div
                    className="sx-separator bg-white bg-moving bg-repeat-x"
                    style={{
                      backgroundImage: "url(images/background/cross-line2.png)",
                    }}
                  >
                    <h3 className="sep-line-one">Our Process</h3>
                  </div>
                </div>
              </div>
              {/* TITLE END */}
              <div className="row">
                <div className="col-md-6">
                  <div className="sx-accordion acc-bg-gray" id="accordion5">
                    {sections.map((section, index) => (
                      <div className="panel sx-panel" key={index}>
                        <div className="acod-head">
                          <h4 className="acod-title">
                            <a
                              onClick={() => toggleSection(index)}
                              style={{ cursor: "pointer" }}
                            >
                              {/* Number Indicator */}
                              <span
                                className={`indicator-number ${
                                  activeIndex === index ? "active" : ""
                                }`}
                              >
                                {index + 1}
                              </span>
                              {section.title}
                            </a>
                          </h4>
                        </div>

                        {/* Content */}
                        <div
                          id={`collapse${index}`}
                          className={`acod-body collapse ${
                            activeIndex === index ? "show" : ""
                          }`}
                        >
                          <div className="acod-content p-a15">
                            <p>{section.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-6 faq-list">
                  <div
                    className="home-2-about bg-bottom-left bg-no-repeat bg-cover"
                    style={{ backgroundImage: "url(" + bgimg2 + ")" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full p-t80 p-b80 inner-page-padding">
          <div className="container">
            <div className="faq-1">
              {/* TITLE START */}
              <div className="section-head">
                <div className="sx-separator-outer separator-left">
                  <div
                    className="sx-separator bg-white bg-moving bg-repeat-x"
                    style={{
                      backgroundImage: "url(images/background/cross-line2.png)",
                    }}
                  >
                    <h3 className="sep-line-one">WHY CHOOSE URBAN FITX?</h3>
                  </div>
                </div>
              </div>
              {/* TITLE END */}
              <div className="row">
                <div className="col-md-6 faq-list">
                  {/* <div>
                      <h4>How do we work?</h4>
                      <p>
                        Progressively generate synergistic total linkage through
                        cross media are intellectual capital. Enthusiastically
                        parallel task team building e-tailers without standards
                        compliant initiatives. Progressively monetize client
                        cent outsourcing with excellent communities..
                      </p>
                    </div>
                    <div>
                      <h4>How long will it take to build my project?</h4>
                      <p>
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popular ised sheets containing Lorem Ipsum
                        passagese.
                      </p>
                    </div>
                    <div>
                      <h4>What services do we offer?</h4>
                      <p>
                        Graphic design lorem Ipsum is simply dummy text of the
                        printing and type setting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the when
                        an unknown printer took a galley.
                      </p>
                    </div> */}
                  <div
                    className="home-2-about bg-bottom-left bg-no-repeat bg-cover"
                    style={{ backgroundImage: "url(" + bgimg1 + ")" }}
                  ></div>
                </div>
                <div className="col-md-6">
                  {/* Accordian */}
                  <div className="sx-accordion acc-bg-gray" id="accordion5">
                    <div className="panel sx-panel">
                      <div className="acod-head acc-actives">
                        <h4 className="acod-title">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne5"
                            data-parent="#accordion5"
                          >
                            Architectural Excellence
                            <span className="indicator">
                              <i className="fa fa-plus" />
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseOne5"
                        className="acod-body collapse show"
                      >
                        <div className="acod-content p-a15">
                          <p>
                            Our team of skilled architects and designers creates
                            innovative, functional, and aesthetically stunning
                            spaces tailored to your vision.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel sx-panel">
                      <div className="acod-head">
                        <h4 className="acod-title">
                          <a
                            data-toggle="collapse"
                            href="#collapseTwo5"
                            className="collapsed"
                            data-parent="#accordion5"
                          >
                            Holistic Interior Fit-Out Solutions
                            <span className="indicator">
                              <i className="fa fa-plus" />
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseTwo5" className="acod-body collapse">
                        <div className="acod-content p-a15">
                          <p>
                            From concept to completion, we deliver seamless
                            interior f it-outs that combine style,
                            functionality, and practicality.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel sx-panel">
                      <div className="acod-head">
                        <h4 className="acod-title">
                          <a
                            data-toggle="collapse"
                            href="#collapseThree5"
                            className="collapsed"
                            data-parent="#accordion5"
                          >
                            Attention to Detail
                            <span className="indicator">
                              <i className="fa fa-plus" />
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseThree5" className="acod-body collapse">
                        <div className="acod-content p-a15">
                          <p>
                            We focus on every element, from spatial planning to
                            material selection, ensuring a flawless finish that
                            exceeds expectations.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel sx-panel">
                      <div className="acod-head">
                        <h4 className="acod-title">
                          <a
                            data-toggle="collapse"
                            href="#collapseFour5"
                            className="collapsed"
                            data-parent="#accordion5"
                          >
                            Sustainable Design
                            <span className="indicator">
                              <i className="fa fa-plus" />
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseFour5" className="acod-body collapse">
                        <div className="acod-content p-a15">
                          <p>
                            We incorporate Eco-friendly practices and materials
                            to create spaces that are both beautiful and
                            environmentally responsible.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel sx-panel">
                      <div className="acod-head">
                        <h4 className="acod-title">
                          <a
                            data-toggle="collapse"
                            href="#collapseFive5"
                            className="collapsed"
                            data-parent="#accordion5"
                          >
                            Collaborative Approach
                            <span className="indicator">
                              <i className="fa fa-plus" />
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseFive5" className="acod-body collapse">
                        <div className="acod-content p-a15">
                          <p>
                            We work closely with clients, contractors, and
                            stakeholders to ensure your project aligns with your
                            goals and budget.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel sx-panel">
                      <div className="acod-head">
                        <h4 className="acod-title">
                          <a
                            data-toggle="collapse"
                            href="#collapseSix5"
                            className="collapsed"
                            data-parent="#accordion5"
                          >
                            Timely Execution
                            <span className="indicator">
                              <i className="fa fa-plus" />
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div id="collapseSix5" className="acod-body collapse">
                        <div className="acod-content p-a15">
                          <p>
                            Our efficient project management ensures your space
                            is delivered on schedule, without compromising
                            quality or design integrity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Team2 />
          <Services2 />
          <Blog1 />
          <Statistics1 /> */}
        {/* <Testimonials2 separatoralignment="separator-center" /> */}
      </div>

      <Footer />

      <style>{`
        .indicator-number {
          display: inline-block;
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border-radius: 50%;
          background: #ddd;
          margin-right: 10px;
          font-weight: bold;
        }

        .indicator-number.active {
          background: #d7b39a;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Home2;
