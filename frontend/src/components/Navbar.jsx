import { useState } from "react";
import logoImage from "../assets/image6.png";
import "./Navbar.css";

import img1 from "../assets/router.svg";
import img2 from "../assets/groups.svg";
import img3 from "../assets/solar_power.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container-fluid px-4">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div>
            <img
              src={logoImage}
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 nav-a">

            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>

            <a href="#" className="flex items-center gap-2">
              <img src={img1} alt="AT Telecom" />
              AT Telecom
            </a>

            <a href="#" className="flex items-center gap-2">
              <img src={img2} alt="AT Staffing" />
              AT Staffing
            </a>

            <a href="#" className="flex items-center gap-2">
              <img src={img3} alt="AT Renewable Energy" />
              AT Renewable Energy
            </a>

            <div className="header-btn">
              <button >
              Contact Us Now
              <i className="fa-solid fa-phone ml-2"></i>
            </button>

            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t  mobile-res">
            <nav className="flex flex-col gap-3">

             
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Projects</a>

    <a href="#" className="flex items-center gap-2">
      <img src={img1} alt="AT Telecom" />
      AT Telecom
    </a>

    <a href="#" className="flex items-center gap-2">
      <img src={img2} alt="AT Staffing" />
      AT Staffing
    </a>

    <a href="#" className="flex items-center gap-2">
      <img src={img3} alt="AT Renewable Energy" />
      AT Renewable Energy
    </a>

            </nav>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;