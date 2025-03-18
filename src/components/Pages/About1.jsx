import React from "react";
import Header4 from "./../Common/Header4";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import About2 from "./../Elements/About2";
import About2Edited from "./../Elements/About2Edited";
import WhatWeDo6 from "./../Elements/WhatWeDo6";
import Achievements1 from "./../Elements/Achievements1";
import Team2 from "./../Elements/Team2";
import Testimonials2 from "./../Elements/Testimonials2";
import Header2 from "../Common/Header2";
import About4 from "../Elements/About4";

var bnrimg = require("./../../images/banner/luxury_interior_fit-out_w3ftrrytyo45ghpxw25l_0.png");
var bgimg1 = require("./../../images/main-slider/slider2/interior_fit-out_gyrx6hd11lyk0zixd3ua_3.png");

class About1 extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/custom.js");
  }
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          <Banner
            title="About Us"
            pagename="About Us"
            description="We specialize in delivering highquality fitout services designed to transform interior spaces into functional, inspiring, and aesthetically pleasing environments."
            bgimage={bnrimg}
          />
          <About2Edited />
          <About4 />

          <div className="section-full p-t80 p-b80 inner-page-padding">
            <div className="container">
              <div className="faq-1">
                {/* TITLE START */}
                <div className="section-head">
                  <div className="sx-separator-outer separator-left">
                    <div
                      className="sx-separator bg-white bg-moving bg-repeat-x"
                      style={{
                        backgroundImage:
                          "url(images/background/cross-line2.png)",
                      }}
                    >
                      <h3 className="sep-line-one">WHY CHOOSE URBAN FITX ?</h3>
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
                              Our team of skilled architects and designers
                              creates innovative, functional, and aesthetically
                              stunning spaces tailored to your vision.
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
                              We focus on every element, from spatial planning
                              to material selection, ensuring a flawless finish
                              that exceeds expectations.
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
                              We incorporate Eco-friendly practices and
                              materials to create spaces that are both beautiful
                              and environmentally responsible.
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
                              stakeholders to ensure your project aligns with
                              your goals and budget.
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
                              Our efficient project management ensures your
                              space is delivered on schedule, without
                              compromising quality or design integrity.
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

          {/* <WhatWeDo6 />
          <Achievements1 />
          <Team2 />
          <Testimonials2 separatoralignment="separator-center" /> */}
        </div>

        <Footer />
      </>
    );
  }
}

export default About1;
