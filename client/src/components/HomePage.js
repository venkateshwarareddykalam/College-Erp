import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Import the CSS file from index.html (assumes style.css is in src folder)

const HomePage = () => {
  // Get current year for footer
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Theme Toggle Checkbox */}
      <input type="checkbox" id="theme-toggle" className="theme-toggle-input" />

      {/* Page Container */}
      <div className="page-container">
        {/* Navigation Bar */}
        <nav className="navbar" style={{ position: "relative" }}>
          <div className="nav-container">
            <a href="#home" className="nav-logo">
              <img src="/cvr.png" alt="CVR College Logo" id="logo-light" />
              <img src="/cvr.png" alt="CVR College Logo Dark" id="logo-dark" />
            </a>
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#home" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item has-submenu">
                <a href="#about" className="nav-link">
                  About Us
                </a>
                <ul className="submenu">
                  <li><a href="#">Vision & Mission</a></li>
                  <li><a href="#">Chairman's Message</a></li>
                  <li><a href="#">Cherabuddi Society</a></li>
                  <li><a href="#">Governing Body</a></li>
                  <li><a href="#">Academic CommitteeClan</a></li>
                  <li><a href="#">Academic Council</a></li>
                  <li><a href="#">Board of Studies</a></li>
                  <li><a href="#">Director</a></li>
                  <li><a href="#">Principal</a></li>
                  <li className="has-submenu">
                    <a href="#">Deans</a>
                    <ul className="submenu submenu-level-2">
                      <li><a href="#">Dean, Academics</a></li>
                      <li><a href="#">Dean, Planning</a></li>
                      <li><a href="#">Dean, Research</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">Associate Deans</a>
                    <ul className="submenu submenu-level-2">
                      <li><a href="#">A. Dean, Academics</a></li>
                      <li><a href="#">A. Dean, Accreditations</a></li>
                      <li><a href="#">A. Dean, Alumni Affairs</a></li>
                      <li><a href="#">A. Dean, Approvals</a></li>
                      <li><a href="#">A. Dean, ET</a></li>
                      <li><a href="#">A. Dean, Faculty Affairs</a></li>
                      <li><a href="#">A. Dean, Hostel Affairs</a></li>
                      <li><a href="#">A. Dean, Research</a></li>
                      <li><a href="#">A. Dean, Student Affairs</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-submenu">
                <a href="#academics" className="nav-link">
                  Academics
                </a>
                <ul className="submenu">
                  <li><a href="#">Courses Offered</a></li>
                  <li><a href="#">Course Outcomes</a></li>
                  <li><a href="#">Examination Branch</a></li>
                  <li><a href="#">Academic Calendars</a></li>
                  <li><a href="#">Syllabuses</a></li>
                  <li><a href="#">Student Feedback</a></li>
                  <li><a href="#">Results</a></li>
                </ul>
              </li>
              <li className="nav-item has-submenu">
                <a href="#departments" className="nav-link">
                  Departments
                </a>
                <ul className="submenu">
                  <li><a href="#">Civil</a></li>
                  <li><a href="#">CSE</a></li>
                  <li><a href="#">CSE (AI&ML)</a></li>
                  <li><a href="#">CSE (CS)</a></li>
                  <li><a href="#">CSE (DS)</a></li>
                  <li><a href="#">ECE</a></li>
                  <li><a href="#">EEE</a></li>
                  <li><a href="#">EIE</a></li>
                  <li><a href="#">H&S</a></li>
                  <li><a href="#">IT</a></li>
                  <li><a href="#">Mechanical</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#research" className="nav-link">
                  Research
                </a>
              </li>
              <li className="nav-item has-submenu">
                <a href="#infrastructure" className="nav-link">
                  Infrastructure
                </a>
                <ul className="submenu">
                  <li><a href="#">Campus</a></li>
                  <li><a href="#">Library</a></li>
                  <li><a href="#">Sports</a></li>
                  <li><a href="#">Computing Infrastructure</a></li>
                  <li><a href="#">Labs</a></li>
                  <li><a href="#">Hostel</a></li>
                  <li><a href="#">Student Centre</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#placements" className="nav-link">
                  Placements
                </a>
              </li>
              <li className="nav-item">
                <a href="#alumni" className="nav-link">
                  Alumni
                </a>
              </li>
              <li className="nav-item has-submenu">
                <a href="#more" className="nav-link">
                  Login
                </a>
                <ul className="submenu">
                  <li><Link to="/login/studentlogin">Student Login</Link></li>
                  <li><Link to="/login/facultylogin">Faculty Login</Link></li>
                  <li><Link to="/login/adminlogin">Admin Login</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact Us
                </a>
              </li>
              <li className="nav-item has-submenu">
                <a href="#" className="nav-link">
                  More
                </a>
                <ul className="submenu">
                  <li><a href="#">EDC / IIC</a></li>
                  <li className="has-submenu">
                    <a href="#">Media</a>
                    <ul className="submenu submenu-level-2">
                      <li><a href="#">Videos</a></li>
                      <li><a href="#">Photos</a></li>
                      <li><a href="#">Print Media</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">Chapters</a>
                    <ul className="submenu submenu-level-2">
                      <li><a href="#">CEA</a></li>
                      <li><a href="#">CSI</a></li>
                      <li><a href="#">Google GDG</a></li>
                      <li><a href="#">ICI</a></li>
                      <li><a href="#">IEEE</a></li>
                      <li><a href="#">NSS</a></li>
                      <li><a href="#">ISTE</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Arts & Culture Clubs</a></li>
                </ul>
              </li>
            </ul>
            <label htmlFor="theme-toggle" className="theme-switch">
              <span className="switch-icon light">
                <i className="fas fa-moon"></i>
              </span>
              <span className="switch-icon dark">
                <i className="fas fa-sun"></i>
              </span>
            </label>
            <div className="hamburger">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header id="home" className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content animate-on-load">
            <h1>Welcome to CVR College of Engineering</h1>
            <p>Inspiring Innovation, Fostering Excellence.</p>
            <a href="#about" className="cta-button">
              Discover More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="hero-scroll-down">
            <a href="#about-snippet">
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </header>

        {/* About Snippet Section */}
        <section id="about-snippet" className="content-section about-section">
          <div className="section-container animate-on-scroll">
            <div className="about-content">
              <div className="about-text">
                <h2>About CVR College of Engineering</h2>
                <p>
                  Established in 2001, CVR College of Engineering stands at the
                  forefront of technical education in Telangana. We are committed
                  to nurturing talent, fostering innovation, and providing a
                  world-class learning environment. Our focus is on holistic
                  development, ensuring our graduates are not just skilled
                  engineers but also responsible citizens.
                </p>
                <a href="#about" className="link-button">
                  Learn More <i className="fas fa-info-circle"></i>
                </a>
              </div>
              <div className="about-image">
                <img
                  src="https://cvr.ac.in/p/p97354601382443/DSCF2265-HDR.jpg"
                  alt="About CVR College"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links / Highlights Section */}
        <section id="highlights" className="content-section highlight-bg">
          <div className="section-container">
            <h2 className="animate-on-scroll">Why Choose CVR?</h2>
            <div className="highlights-grid">
              <div className="highlight-card animate-on-scroll">
                <div
                  className="card-image"
                  style={{
                    backgroundImage:
                      "url('https://cvr.ac.in/p/p97354601382443/DJI_0778.jpg')",
                  }}
                ></div>
                <div className="card-content">
                  <h3>
                    <i className="fas fa-university icon-left"></i>Academic
                    Excellence
                  </h3>
                  <p>
                    State-of-the-art infrastructure, experienced faculty, and NBA
                    accredited programs.
                  </p>
                </div>
              </div>
              <div
                className="highlight-card animate-on-scroll"
                style={{ animationDelay: "0.15s" }}
              >
                <div
                  className="card-image"
                  style={{
                    backgroundImage:
                      "url('https://cvr.ac.in/home4/images/2024placementsavgsalary.jpg')",
                  }}
                ></div>
                <div className="card-content">
                  <h3>
                    <i className="fas fa-briefcase icon-left"></i>Top Placements
                  </h3>
                  <p>
                    Consistent record of placing students in top MNCs and core
                    companies.
                  </p>
                </div>
              </div>
              <div
                className="highlight-card animate-on-scroll"
                style={{ animationDelay: "0.3s" }}
              >
                <div
                  className="card-image"
                  style={{
                    backgroundImage:
                      "url('https://cvr.ac.in/p/p97667334684823/IMG_0843.jpg')",
                  }}
                ></div>
                <div className="card-content">
                  <h3>
                    <i className="fas fa-users icon-left"></i>Vibrant Campus Life
                  </h3>
                  <p>
                    Engaging student clubs, cultural events, sports facilities,
                    and hostel amenities.
                  </p>
                </div>
              </div>
              <div
                className="highlight-card animate-on-scroll"
                style={{ animationDelay: "0.45s" }}
              >
                <div
                  className="card-image"
                  style={{
                    backgroundImage:
                      "url('https://cvr.ac.in/p/p9766733468479/IMG_1101.jpg')",
                  }}
                ></div>
                <div className="card-content">
                  <h3>
                    <i className="fas fa-flask icon-left"></i>Research &
                    Innovation
                  </h3>
                  <p>
                    Dedicated research centers, funding opportunities, and
                    industry collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Departments Snippet Section */}
        <section id="dept-snippet" className="content-section">
          <div className="section-container animate-on-scroll">
            <h2>Explore Our Departments</h2>
            <p>
              Offering a wide range of undergraduate and postgraduate programs in
              engineering and technology, equipped with modern labs and guided by
              expert faculty.
            </p>
            <div className="dept-links">
              <a href="#" className="dept-badge">
                CSE
              </a>
              <a href="#" className="dept-badge">
                ECE
              </a>
              <a href="#" className="dept-badge">
                EEE
              </a>
              <a href="#" className="dept-badge">
                Mechanical
              </a>
              <a href="#" className="dept-badge">
                Civil
              </a>
              <a href="#" className="dept-badge">
                IT
              </a>
              <a href="#" className="dept-badge">
                CSE (AI&ML)
              </a>
              <a href="#departments" className="dept-badge more">
                View All <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact">
          <div className="section-container footer-grid">
            <div className="footer-col about">
              <h4>CVR College of Engineering</h4>
              <p>
                Vastunagar, Mangalpalli (V), Ibrahimpatnam (M), Rangareddy (D),
                Telangana 501510
              </p>
              <p>Affiliated to JNTUH, Approved by AICTE</p>
            </div>
            <div className="footer-col links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#academics">Academics</a></li>
                <li><a href="#departments">Departments</a></li>
                <li><a href="#placements">Placements</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-col contact-info">
              <h4>Get In Touch</h4>
              <p>
                <i className="fas fa-phone"></i> +91-XXXXXXXXXX
              </p>
              <p>
                <i className="fas fa-envelope"></i>{" "}
                <a href="mailto:info@cvr.ac.in">info@cvr.ac.in</a>
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {currentYear} CVR College of Engineering. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;