import React from "react";
import { NavLink } from "react-router-dom";

var bgimg1 = require("./../../images/main-slider/slider2/interior_fit-out_gyrx6hd11lyk0zixd3ua_3.png");

class About2 extends React.Component {
  render() {
    return (
      <>
        <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-12 ">
                  <div
                    className="home-2-about bg-bottom-left bg-no-repeat bg-cover"
                    style={{ backgroundImage: "url(" + bgimg1 + ")" }}
                  ></div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-12">
                  <div className="about-home-2">
                    <h1 className="m-b40">ABOUT URBAN FITX</h1>
                    <h4 className="m-t0 sx-tilte">Welcome To Our Company</h4>
                    <p>
                      At URBAN FITX CONTRACTING, we specialize in delivering
                      high quality fitout services designed to transform
                      interior spaces into functional, inspiring, and
                      aesthetically pleasing environments. Based in the UAE, our
                      company brings together a team of experienced
                      professionals dedicated to crafting tailored solutions for
                      residential, commercial, and retail spaces.
                    </p>
                    <div className="text-left">
                      <NavLink to={"/about-1"} className="site-button-link">
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About2;
