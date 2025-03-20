import React, { useState } from "react";
import Header4 from "./../Common/Header4";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import GoogleMapReact from "google-map-react";
import Header2 from "../Common/Header2";
import axios from "axios";

var bnrimg = require("./../../images/banner/modern_interior_design_bathroom_with_black_marble_counter_and_wood__v8gsfmpyprtqqcnli8gy_2.png");

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      alert(response.data.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send email.");
    }
  };

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
          title="Contact Us"
          pagename="Contact us"
          description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
          bgimage={bnrimg}
        />
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
                    onSubmit={handleSubmit}
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
                            <h3 className="sep-line-one">Form</h3>
                          </div>
                        </div>
                      </div>
                      {/* TITLE END */}
                      <div className="form-group">
                        <input
                          name="name"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          required
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
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
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="text-right">
                        <button
                          name="submit"
                          type="submit"
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
};

export default ContactUs;
