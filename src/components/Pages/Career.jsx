import React from "react";
import Header4 from "../Common/Header4";
import Footer from "../Common/Footer";
import Banner from "../Elements/Banner";
import GoogleMapReact from "google-map-react";
import Header2 from "../Common/Header2";

var bnrimg = require("./../../images/banner/luxury_interior_fit-out_w3ftrrytyo45ghpxw25l_0.png");
var bgimg1 = require("./../../images/main-slider/slider2/interior_fit-out_gyrx6hd11lyk0zixd3ua_3.png");

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Career extends React.Component {
  render() {
    const defaultProps = {
      center: {
        lat: 34.07328,
        lng: -118.25141,
      },
      zoom: 12,
    };
    return (
      <>
        <Header2 />
        <div className="page-content">
          <Banner
            title="Career"
            pagename="Career"
            description="“At Urban Fitx
              Contracting, we
              don’t just create
              interiors – we
              create experiences
              that inspire.”"
            bgimage={bnrimg}
          />

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
                      <h3 className="sep-line-one">WHY JOIN URBAN FITX ?</h3>
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

          {/* SECTION CONTENTG START */}
          <div className="section-full p-tb80 inner-page-padding">
            {/* LOCATION BLOCK*/}
            <div className="container">
              {/* GOOGLE MAP & CONTACT FORM */}
              <div className="section-content">
                {/* CONTACT FORM*/}
                <div className="row">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <form
                      className="contact-form cons-contact-form bg-gray p-a30"
                      method="post"
                      action="#"
                    >
                      <div className="contact-one">
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
                              <h3 className="sep-line-one">Upload CV to Join us</h3>
                            </div>
                          </div>
                        </div>
                        {/* TITLE END */}
                        {/* <div className="form-group">
                          <input
                            name="username"
                            type="text"
                            required
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            rows={4}
                            className="form-control "
                            required
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div> */}
                        <div className="form-group">
                          <input
                            name="email"
                            type="file"
                            className="form-control"
                            required
                            placeholder="Email"
                          />
                        </div>
                        <div className="text-right">
                          <button
                            name="submit"
                            type="button"
                            value="Submit"
                            className="site-button btn-half"
                          >
                            <span> submit</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div
                      className="contact-info block-shadow bg-white bg-center p-a40"
                      style={{
                        backgroundImage: "url(images/background/bg-map.png)",
                      }}
                    >
                      <div>
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
                              <h3 className="sep-line-one">Info</h3>
                            </div>
                          </div>
                        </div>
                        {/* TITLE END */}
                        <div className="sx-icon-box-wraper left p-b30">
                          <div className="icon-xs">
                            <i className="fa fa-phone" />
                          </div>
                          <div className="icon-content">
                            <h5 className="m-t0">Phone number</h5>
                            <p>+971567756759</p>
                            <p>+971563088058</p>
                          </div>
                        </div>
                        <div className="sx-icon-box-wraper left p-b30">
                          <div className="icon-xs">
                            <i className="fa fa-envelope" />
                          </div>
                          <div className="icon-content">
                            <h5 className="m-t0">Email address</h5>
                            <p>info@urbanfitx.com</p>
                          </div>
                        </div>
                        <div className="sx-icon-box-wraper left">
                          <div className="icon-xs">
                            <i className="fa fa-map-marker" />
                          </div>
                          <div className="icon-content">
                            <h5 className="m-t0">Address info</h5>
                            <p>Dubai - United Arab Emirates</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gmap-outline">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={34.07328}
                lng={-118.25141}
                text={<i className="fa fa-map-marker" />}
              />
            </GoogleMapReact>
          </div>
          {/* SECTION CONTENT END */}
        </div>

        <Footer />
      </>
    );
  }
}

export default Career;
