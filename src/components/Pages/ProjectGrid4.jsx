import React from "react";
import { NavLink } from "react-router-dom";
import Header4 from "./../Common/Header4";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import Header2 from "../Common/Header2";

const filters = [
  { label: "Architecture", filter: ".cat-1" },
  { label: "Decore", filter: ".cat-2" },
  { label: "Outdoor", filter: ".cat-3" },
  { label: "Interiors", filter: ".cat-4" },
  { label: "Residential", filter: ".cat-5" },
];

const projects = [
  {
    image: require("./../../images/projects/portrait/_interior_design_bedroom_vq2505s68ylsav8fyh44_3.png"),
    title: "Interior Work Avroko",
    address: "Muscat, Sultanate of Oman",
    filter: "cat-1",
  },
  {
    image: require("./../../images/projects/portrait/1c720465d270dbcc3bf7b642133deaf4.jpg"),
    title: "Vilters",
    address: "Muscat, Sultanate of Oman",
    filter: "cat-2",
  },
  {
    image: require("./../../images/projects/portrait/fit-out_interior_design_kitchen_clmbmfh00ulid08jdqay_3.png"),
    title: "Industrial Design",
    address: "Muscat, Sultanate of Oman",
    filter: "cat-3",
  },
  {
    image: require("./../../images/projects/portrait/_interior_design_living_room_oxfy5ggxim6if1f38pxh_2.png"),
    title: "House Bluprint",
    address: "Muscat, Sultanate of Oman",
    filter: "cat-4",
  },
  {
    image: require("./../../images/projects/portrait/00d20f6468b1085c211afaf52da1716a.jpg"),
    title: "Modern Bathroom",
    address: "Muscat, Sultanate of Oman",
    filter: "cat-5",
  },
  {
    image: require("./../../images/projects/portrait/5e1f27d724266b2ba36aeff52407313c.jpg"),
    title: "Bellevue Project",
    address: "Muscat, Sultanate of Oman",
    filter: "cat-4",
  },
  {
    image: require("./../../images/projects/portrait/77fb991768b59cf147f7ef91fb62f2b2.jpg"),
    title: "Qatar Pavilion",
    address: "Muscat, Sultanate of Oman",
    filter: "cat-3",
  },
  {
    image: require("./../../images/projects/portrait/87a59be5d934c7b1ffa27af7172af5ae.jpg"),
    title: "Museum",
    address: "Muscat, Sultanate of Oman",
    filter: "cat-2",
  },
  {
    image: require("./../../images/projects/portrait/31672f4daadf9fbf502ab95add0fdcc9.jpg"),
    title: "Modern house",
    address: "Muscat, Sultanate of Oman",
    filter: "cat-1",
  },
  {
    image: require("./../../images/projects/portrait/51115d57b30d0e912f45756ac2e613c4.jpg"),
    title: "Qatar Pavilion",
    address: "Muscat, Sultanate of Oman",
    filter: "cat-3",
  },
  {
    image: require("./../../images/projects/portrait/interior_fit-out_gyrx6hd11lyk0zixd3ua_3.png"),
    title: "Museum",
    address: "Muscat, Sultanate of Oman",
    filter: "cat-2",
  },
  {
    image: require("./../../images/projects/portrait/luxury_interior_fit-out_kitchen_6e7mm519v92sj16g0g2i_0.png"),
    title: "Interior Work Avroko",
    address: "Muscat, Sultanate of Oman",
    filter: "cat-1",
  },
];

var bnrimg = require("./../../images/banner/interior_fit-out_gyrx6hd11lyk0zixd3ua_3.png");
var bgimg1 = require("./../../images/background/cross-line.png");

class ProjectGrid4 extends React.Component {
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
            title="Projects"
            pagename="Projects"
            description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
            bgimage={bnrimg}
          />

          {/* SECTION CONTENT START */}
          <div className="section-full p-tb80 column-grid-4 inner-page-padding">
            <div className="container">
              {/* Filter Nav START */}
              {/* <div className="filter-wrap p-b30 text-center">
                <ul className="filter-navigation masonry-filter clearfix">
                  <li className="active">
                    <NavLink
                      to={"#"}
                      className="btn from-top"
                      data-filter="*"
                      data-hover="All"
                    >
                      All
                    </NavLink>
                  </li>
                  {filters.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={"#"}
                        className="btn from-top"
                        data-filter={item.filter}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div> */}
              {/* Filter Nav END */}
              {/* GALLERY CONTENT START */}
              <ul className="masonry-outer mfp-gallery row work-grid clearfix list-unstyled">
                {projects.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.filter} masonry-item col-xl-3  col-lg-4 col-md-6 col-sm-12 m-b30`}
                  >
                    <div className="sx-box image-hover-block">
                      <div className="sx-thum-bx">
                        <img src={item.image} alt="" />
                      </div>
                      {/* <div className="sx-info  p-t20 text-white">
                        <h4 className="sx-tilte">
                          <NavLink to={"/project-detail1#"}>
                            {item.title}
                          </NavLink>
                        </h4>
                        <p className="m-b0">{item.address}</p>
                      </div> */}
                      <a className="mfp-link" href={item.image}>
                        <i className="fa fa-arrows-alt" />
                      </a>
                    </div>
                  </div>
                ))}
              </ul>
              {/* GALLERY CONTENT END */}
              {/* <div
                className="text-center load-more-btn-outer"
                style={{ backgroundImage: "url(" + bgimg1 + ")" }}
              >
                <button className="site-button-secondry btn-half">
                  <span>Load More</span>
                </button>
              </div> */}
            </div>
          </div>
          {/* SECTION CONTENT END  */}
        </div>

        <Footer />
      </>
    );
  }
}

export default ProjectGrid4;
