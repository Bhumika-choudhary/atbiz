import logo1 from "../assets/image6.png";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="">
        {/* Main Footer Content */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <div className="main-footer">
                <div className="main-logo">
                  <img src={logo1} alt="Logo" />
                </div>
                <div className="footer-icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="footer-list">
                <h6>Quick Links</h6>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Projects</li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="footer-list">
                <h6>Our Services</h6>
                <ul>
                  <li>OFC Work and Maintenance</li>
                  <li>QIS Battery Swapping Maintenance</li>
                  <li>Tower Operation & Maintenance</li>
                  <li>EPC of Solar Power Plant</li>
                  <li>Civil Construction</li>
                  <li>Road Construction</li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="footer-list">
                <h6>Contact Info</h6>
                <ul>
                  <li>
                    3rd floor, Rolex Square, Beside Airtel Building,City Center,
                    Gwalior -474011
                  </li>
                  <li style={{ cursor: "pointer" }}>info@atbiz.in</li>

                  <li style={{ cursor: "pointer" }}>+91-751-4044444</li>
                </ul>
                
              </div>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col">
              {/* Bottom Footer */}
              <div className=" bottom">
                <p>© atbiz 2026 All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
