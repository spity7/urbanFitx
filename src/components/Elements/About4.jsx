import React from "react";
import { NavLink } from "react-router-dom";

const locations = [
  {
    image: require("./../../images/our-history/luxury_interior_fit-out_kitchen_bbxjyg0tqy6lpy92ip1u_1.png"),
    title: "Our Mission",
    location: "Muscat, Sultanate of Oman.",
    description:
      "At Urban Fitx Contracting, our mission is to provide tailored fitout services that exceed client expectations. We aim to create inspiring spaces that reflect our clients’ vision while adhering to the highest standards of quality, sustainability, and timely delivery.",
  },
  {
    image: require("./../../images/our-history/luxury_interior_fit-out_kitchen_6e7mm519v92sj16g0g2i_0.png"),
    title: "Our Vision",
    location: "Perth, Australia",
    description:
      " To become the leading fitout contractor in the UAE, recognized for our commitment to excellence, innovation, and customer satisfaction.",
  },
  // {
  //     image: require('./../../images/our-history/2.jpg'),
  //     title: 'Drana Villa, CA',
  //     location: 'Amman, Jordan',
  //     description: 'The floor looks magnificent and the parquet in the hall sets it off beautifully. Your men were excellent, you were delightful and nothing was too much trouble for you. You have very tidy workers, covering everything, and the house was left in a good shape as the condition allowed.',
  // },
  // {
  //     image: require('./../../images/our-history/3.jpg'),
  //     title: 'House Office, CA',
  //     location: 'Casablanca, Morocco',
  //     description: 'I just wanted to say thank you and the team very much for the brilliant service around renovating the floors at our house. You were absolutely brilliant and we can see you’ve gone the extra mile matching the floors between rooms etc. You’ve kept the place really tidy too, cannot ask for more.',
  // },
  // {
  //     image: require('./../../images/our-history/5.jpg'),
  //     title: 'French Embassy',
  //     location: 'Perth, Australia',
  //     description: 'I just wanted to say thank you and the team very much for the brilliant service around renovating the floors at our house. You were absolutely brilliant and we can see you’ve gone the extra mile matching the floors between rooms etc. You’ve kept the place really tidy too, cannot ask for more.',
  // },
  // {
  //     image: require('./../../images/our-history/6.jpg'),
  //     title: 'Art Museum',
  //     location: 'Muscat, Sultanate of Oman.',
  //     description: 'Fantastic service from start to finish. After our ceiling collapsed we never thought our damaged floor would look so good again. These guys worked in a tight time frame and were very accommodating to the other trades working in the same area to produce brilliant results and restore our badly damaged floor to look like new!',
  // },
  // {
  //     image: require('./../../images/our-history/7.jpg'),
  //     title: 'Drana Villa, CA',
  //     location: 'Amman, Jordan',
  //     description: 'The floor looks magnificent and the parquet in the hall sets it off beautifully. Your men were excellent, you were delightful and nothing was too much trouble for you. You have very tidy workers, covering everything, and the house was left in a good shape as the condition allowed.',
  // },
  // {
  //     image: require('./../../images/our-history/8.jpg'),
  //     title: 'House Office, CA',
  //     locatio: 'Casablanca, Morocco',
  //     description: 'I just wanted to say thank you and the team very much for the brilliant service around renovating the floors at our house. You were absolutely brilliant and we can see you’ve gone the extra mile matching the floors between rooms etc. You’ve kept the place really tidy too, cannot ask for more.',
  // }
];

var bgimg1 = require("./../../images/background/cross-line.png");

class About4 extends React.Component {
  render() {
    return (
      <>
        <div className="section-full p-t80 p-b50 bg-white inner-page-padding">
          <div className="container">
            <div className="section-content ">
              <div className="our-history text-black">
                {locations.map((item, index) => (
                  <div className="row" key={index}>
                    <div className="col-12">
                      <div className="our-history-content m-b30">
                        <div className="large-title">
                          <h2 className="m-t0">{item.title}</h2>
                          {/* <h4>{item.location}</h4> */}
                        </div>
                        <p>{item.description}</p>
                        {/* <NavLink
                          to={"/about-1"}
                          className="site-button-secondry btn-half"
                        >
                          <span> View All</span>
                        </NavLink> */}
                      </div>
                    </div>

                    <div className="col-12 pic-bg-border">
                      <div
                        className="our-history-pic bg-no-repeat bg-center bg-cover"
                        data-stellar-background-ratio="0.5"
                        style={{ backgroundImage: "url(" + item.image + ")" }}
                      ></div>
                    </div>
                  </div>
                ))}
                {/* <div
                  className="text-center load-more-btn-outer"
                  style={{ backgroundImage: "url(" + bgimg1 + ")" }}
                >
                  <button
                    id="loadMorebtn-5"
                    className="site-button-secondry btn-half"
                  >
                    <span>Load More</span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About4;
