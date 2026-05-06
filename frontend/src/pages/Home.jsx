import React from "react";
import "./Home.css";
import rightImage from "../assets/freepik__a-highend-photorealistic-closeup-of-a-professional__76143 1.png";
import logo1 from "../assets/checklist_rtl.svg";
import logo2 from "../assets/sentiment_satisfied.svg";
import logo3 from "../assets/engineering.svg";
import logo4 from "../assets/editor_choice.svg";
import octoberImage from "../assets/Mask group.png";
import icon1 from "../assets/Group 6.svg";
import icon2 from "../assets/Group2.svg";
import icon3 from "../assets/Group 3.svg";
import service1 from "../assets/Mask group (1).png";
import service2 from "../assets/Mask group (2).png";
import service3 from "../assets/Mask group (3).png";
import team1 from "../assets/Mask group (4).png";
import team2 from "../assets/Mask group (5).png";
import team3 from "../assets/Mask group (6).png";
import team4 from "../assets/Mask group (7).png";
import client1 from "../assets/groups.svg";
import client2 from "../assets/router.svg";
import client3 from "../assets/solar_power.svg";
import amazon from "../assets/image21.png";
import reliance from "../assets/image22.png";
import carousal1 from "../assets/image11.png";
import carousal2 from "../assets/image12.png";
import carousal3 from "../assets/image15.png";
import carousal4 from "../assets/image17.png";
import carousal5 from "../assets/image18.png";

function Home() {
  return (
    <>
      {/* hero section design  */}
      <section className="hero">
        <div className="hero-wrapper">
          {/* BACKGROUND IMAGE (RIGHT SIDE) */}
          <div className="hero-right">
            <img src={rightImage} alt="Hero" />
          </div>

          {/* LEFT RED PANEL */}
          <div className="hero-left">
            <div className="content">
              <p className="tag">INTEGRATED SERVICE EXCELLENCE</p>

              <h1>
                Empowering Growth <br />
                with Reliable Talent
              </h1>

              <p className="desc">
                From expert Staffing to professional Security, we combine the
                best service and management to drive your progress.
              </p>

              <button className=" hero-btn2">
                Hire Talent
                <div className="circle">
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* rating section design */}
      <section className="rating">
        <div className="container text-center ">
          <div className="row">
            <div className="col-3">
              <div className=" rating-box d-flex">
                <div>
                  <img src={logo1} alt="Logo" />
                </div>
                <div className="rating-content">
                  <p>Completed Projects</p>
                  <h5>186+</h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className=" rating-box d-flex">
                <div>
                  <img src={logo2} alt="Logo" />
                </div>
                <div className="rating-content">
                  <p>Happy Customers</p>
                  <h5>324+</h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className=" rating-box d-flex">
                <div>
                  <img src={logo3} alt="Logo" />
                </div>
                <div className="rating-content">
                  <p>Qualified Engineers</p>
                  <h5>43+</h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className=" rating-box d-flex">
                <div>
                  <img src={logo4} alt="Logo" />
                </div>
                <div className="rating-content">
                  <p>Years Experiance</p>
                  <h5>16+</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* at biz  section design */}

      <section className="biz">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="biz-box">
                <div className="biz-heading">
                  <p>WE @ at Biz</p>
                </div>
                <h2>15 Years of Getting It Done. On Ground. Across India.</h2>
                <p>
                  AtBiz is not a consulting company. We are an execution
                  company. Over 15+ years, our teams have laid fibre in the most
                  challenging terrains, managed telecom networks for every major
                  private operator, deployed manpower across all four regions of
                  India, and executed solar EPC projects for industry leaders.
                  From asset security in remote telecom sites to quick
                  interchange battery stations in metros — we operate where it
                  matters, when it matters. Our certified teams bring precision,
                  accountability, and zero-surprise delivery to every project.
                </p>
                <button>
                  Read More <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className="biz-box">
                <img src={octoberImage} alt="" />
              </div>
            </div>
            <div className="col-4">
              <div className="biz-box">
                <div className="d-flex">
                  <div className="biz-img">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="right-content">
                    <h6>Expert Engineering & Ops Team</h6>
                    <p>
                      15+ years of field experience across telecom, energy, and
                      workforce operations.
                    </p>
                  </div>
                </div>

                <hr />
                <div className="d-flex">
                  <div className="biz-img">
                    <img src={icon2} alt="" />
                  </div>
                  <div className=" right-content">
                    <h6>Pan-India Reach. All Terrains</h6>
                    <p>
                      Extreme North to South — our teams and resources are
                      deployed across every region.
                    </p>
                  </div>
                </div>
                <hr />
                <div className="d-flex">
                  <div className="biz-img">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="right-content">
                    <h6>Asset-First Approach</h6>
                    <p>
                      We own our equipment — HDD machines, JCBs, fibre fleet —
                      so your projects never wait.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services section design */}

      <section className="sevices">
        <div className="container">
          <div className="row">
            <div className="col servies-heading">
              <h5>Our Services</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="service-box">
                <div className="services-heading1">
                  <h5>at Telecom</h5>
                  <p>
                    Explore at Telecom{" "}
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </p>
                </div>
                <div className="services-content">
                  <p>15+ Years of Telecom Excellence</p>
                  <h6>
                    Keeping India's Networks Running. Every Terrain. Every Day.
                  </h6>
                  <p>
                    From urban towers to extreme terrains, AtBiz has 15+ years
                    of expertise in telecom O&M and optical fibre laying. We
                    manage private operator networks, protect critical assets,
                    and keep connectivity alive — across Central, South, North,
                    and extreme North and West India.
                  </p>
                </div>
                <div className="services-img">
                  <img src={service1} alt="Service 1" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="service-box">
                <div className="services-heading1">
                  <h5>at Staffing</h5>
                  <p>
                    Hire with at Staffing{" "}
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </p>
                </div>
                <div className="services-content">
                  <p>Skilled. Reliable. Pan-India.</p>
                  <h6>
                    The Right People. The Right Place. <br />
                    Right Now.
                  </h6>
                  <p>
                    From urban towers to extreme terrains, AtBiz has 15+ years
                    of expertise in telecom O&M and optical fibre laying. We
                    manage private operator networks, protect critical assets,
                    and keep connectivity alive — across Central, South, North,
                    and extreme North and West India.
                  </p>
                </div>
                <div className="services-img">
                  <img src={service2} alt="Service 1" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="service-box">
                <div className="services-heading1">
                  <h5>at Renewable Energy</h5>
                  <p>
                    Go Green with atBiz{" "}
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </p>
                </div>
                <div className="services-content">
                  <p>Solar EPC · Quick Interchange · Clean Future</p>
                  <h6>Powering Progress. From Plant to Grid to Station.</h6>
                  <p>
                    AtBiz executes solar plant projects on a full EPC basis and
                    manages Quick Interchange Battery Stations in metros —
                    working with industry leaders like Zeus and Sun Mobility. We
                    deliver, operate, and maintain clean energy infrastructure
                    end to end.
                  </p>
                </div>
                <div className="services-img">
                  <img src={service3} alt="Service 1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team member section design  */}
      <section className="team">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="experts">
                <h5>Expert team members.</h5>
                <p>
                  Our leadership team brings together 15+ years of hands-on
                  field experience in telecom infrastructure, workforce
                  management, and clean energy execution. Comprising certified
                  engineers, operations specialists, and strategic directors —
                  the people at AtBiz have worked across every terrain in India,
                  managed large-scale networks, and delivered projects from
                  blueprint to go-live. At AtBiz, every director is also an
                  operator. They don’t just plan — they execute.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="team-member">
                <div>
                  <img src={team1} alt="" />
                </div>
                <div className="member-name">
                  <div>
                    <h6>Mr. Rajeev Sharma</h6>
                    <p>Director</p>
                  </div>
                  <div>
                    <i className="fa-brands fa-linkedin-in"></i>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="team-member">
                <div>
                  <img src={team2} alt="" />
                </div>
                <div className="member-name">
                  <div>
                    <h6>Mr Deepak Jadon</h6>
                    <p>Director</p>
                  </div>
                  <div>
                    <i className="fa-brands fa-linkedin-in"></i>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <div className="team-member">
                <div>
                  <img src={team3} alt="" />
                </div>
                <div className="member-name">
                  <div>
                    <h6>Mr. Satypal Singh Jadon</h6>
                    <p>Director</p>
                  </div>
                  <div>
                    <i className="fa-brands fa-linkedin-in"></i>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="team-member">
                <div>
                  <img src={team4} alt="" />
                </div>
                <div className="member-name">
                  <div>
                    <h6>Mr. Ajit Tiwari</h6>
                    <p>Director</p>
                  </div>
                  <div>
                    <i className="fa-brands fa-linkedin-in"></i>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* client review section design */}

      <section className="client">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>Our clients reviews.</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className=" client0 d-flex">
                <div>
                  <img src={client1} alt="" />
                </div>
                <p>at Staffing</p>
              </div>
            </div>
            <div className="col-4">
              <div className="client0 d-flex">
                <div>
                  <img src={client2} alt="" />
                </div>
                <p>at Telecom</p>
              </div>
            </div>
            <div className="col-4">
              <div className="client0 d-flex">
                <div>
                  <img src={client3} alt="" />
                </div>
                <p>at Renewable Energy</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <div className="client1">
                <div className="client2">
                  <p>Manpower Supply</p>
                </div>
                <p className="clientp">
                  "At Biz provides top-notch security services with highly
                  trained personnel who prioritize safety and professionalism.
                  Their reliable team gives us complete peace of mind around the
                  clock."
                </p>
                <hr />
                <div className=" client3 ">
                  <div>
                    <h6>Anjali Mehta</h6>
                    <p>Senior Manager – Supply Chain & Logistics</p>
                  </div>
                  <div>
                    <img src={amazon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="client1">
                <div className="client2">
                  <p>Security</p>
                </div>
                <p className="clientp">
                  "The security personnel deployed by AtBiz at our outlets are
                  professional, well-trained, and consistent. A dependable
                  partner across multiple locations."
                </p>
                <hr />
                <div className=" client3 ">
                  <div>
                    <h6>Col. (Retd.) S. Chatterjee</h6>
                    <p>Head of Security & Loss Prevention</p>
                  </div>
                  <div>
                    <img src={reliance} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* award section design */}

      <section className="awards">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>Awards & Recognition</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {/* First Slide */}
                  <div className="carousel-item active">
                    <div className=" d-flex gap-20">
                      <div className="carousel-item1">
                        <img src={carousal1} alt="1" />
                        <p>2026</p>
                      </div>
                      <div className="carousel-item1">
                        <img src={carousal2} alt="2" />
                        <p>2025</p>
                      </div>
                      <div className="carousel-item1">
                        <img src={carousal3} alt="3" />
                        <p>2024</p>
                      </div>
                      <div className="carousel-item1">
                        <img src={carousal4} alt="4" />
                        <p>2023</p>
                      </div>
                      <div className="carousel-item1">
                        <img src={carousal5} alt="5" />
                        <p>2022</p>
                      </div>
                      <div className="carousel-item1">
                        <img src={carousal1} alt="6" />
                        <p>2021</p>
                      </div>
                    </div>
                  </div>

                  {/* Second Slide */}
                  <div className="carousel-item">
                    <div className=" d-flex gap-20">
                      <div className="carousel-item1">
                        <img src={carousal1} alt="1" />
                        <p>2026</p>
                      </div>
                      <div className="carousel-item1">
                        <img src={carousal2} alt="2" />
                        <p>2025</p>
                      </div>
                      <div className="carousel-item1">
                        <img src={carousal3} alt="3" />
                        <p>2024</p>
                      </div>
                      <div className="carousel-item1">
                        <img src={carousal4} alt="4" />
                        <p>2023</p>
                      </div>
                      <div className="carousel-item1">
                        <img src={carousal5} alt="5" />
                        <p>2022</p>
                      </div>
                      <div className="carousel-item1">
                        <img src={carousal1} alt="6" />
                        <p>2021</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Previous */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>

                {/* Next */}
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end to end workforce section design */}

      <section className="workforce">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>
                End-to-End Workforce & Infrastructure Solutions You Can Trust
              </h5>
              <p>
                Atbiz combines expert manpower, telecom services, energy
                solutions, and infrastructure <br />
                execution — ensuring quality, speed, and reliability at every
                stage.
              </p>
              <div className="workforce-btns">
                <button className="btn btn1">
                  <span>Get a Quote <div className="circle circle-light1">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div></span>
                 
                </button>

                <button className="btn btn2">
                  <span>Talk to Expert 
                    <div className="circle circle-light">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  </span>
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
