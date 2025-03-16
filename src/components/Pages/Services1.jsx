import React, { useState } from "react";
import Header4 from "./../Common/Header4";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import WhatWeDo6 from "./../Elements/WhatWeDo6";
import Services6 from "./../Elements/Services6";
import Services6_copy from "./../Elements/Services6_copy";
import Services7 from "./../Elements/Services7";
import ClientsLogo2 from "./../Elements/ClientsLogo2";
import Header2 from "../Common/Header2";
import WhatWeDo2 from "../Elements/WhatWeDo2";
import Slider2_1 from "../Elements/Slider2_1";

var bnrimg = require("./../../images/banner/_interior_design_bedroom_vq2505s68ylsav8fyh44_3.png");
var bgimg2 = require("./../../images/main-slider/slider2/modern_interior_design_reception_with_marble_counter_osu7w1plv85mnebjqwhx_3.png");

const Services1 = () => {
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
        <Slider2_1 />
        {/* <Banner
            title="Services"
            pagename="Services"
            description="Urban Fitx Contracting offers a comprehensive range of fit-out services designed to transform spaces and elevate experiences."
            bgimage={bnrimg}
          /> */}
        {/* <WhatWeDo6 /> */}
        <Services6_copy />
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

        {/* <Services7 /> */}
        {/* <ClientsLogo2 bgcolor="bg-gray" /> */}
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

export default Services1;
