import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar with Login Buttons */}
      <nav className="navbar">
        <div className="logo-container">
          <h1>CVR</h1>
          <p>College of Engineering</p>
        </div>
        <div className="login-buttons">
          <Link to="/login/studentlogin" className="login-btn student-btn">
            Student Login
          </Link>
          <Link to="/login/facultylogin" className="login-btn faculty-btn">
            Faculty Login
          </Link>
          <Link to="/login/adminlogin" className="login-btn admin-btn">
            Admin Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to CVR College of Engineering</h1>
          <p>Empowering Students with Knowledge and Skills for Tomorrow</p>
          <div className="hero-buttons">
            <a href="#about" className="hero-btn primary-btn">
              Learn More
            </a>
            <a href="#programs" className="hero-btn secondary-btn">
              Our Programs
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2>About CVR College</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              CVR College of Engineering was established in 2001 with a vision to
              provide quality technical education and produce competent engineers
              equipped with knowledge and skills essential to address the challenges
              of the modern technological world.
            </p>
            <p>
              Our college offers various undergraduate and postgraduate programs
              in engineering and technology with state-of-the-art infrastructure,
              well-qualified faculty, and a conducive learning environment.
            </p>
          </div>
          <div className="stats-container">
            <div className="stat-box">
              <h3>20+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-box">
              <h3>50+</h3>
              <p>Academic Programs</p>
            </div>
            <div className="stat-box">
              <h3>200+</h3>
              <p>Faculty Members</p>
            </div>
            <div className="stat-box">
              <h3>10,000+</h3>
              <p>Alumni Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section">
        <div className="section-header">
          <h2>Our Programs</h2>
          <div className="underline"></div>
        </div>
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Computer Science</h3>
            <p>
              Covering advanced concepts in programming, data structures, artificial
              intelligence, and more.
            </p>
          </div>
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-microchip"></i>
            </div>
            <h3>Electronics</h3>
            <p>
              Focused on circuit design, digital systems, communication systems,
              and signal processing.
            </p>
          </div>
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Mechanical</h3>
            <p>
              Covering thermodynamics, manufacturing processes, machine design,
              and robotics.
            </p>
          </div>
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-building"></i>
            </div>
            <h3>Civil</h3>
            <p>
              Focusing on structural engineering, transportation, environmental
              engineering, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>CVR College of Engineering</h2>
            <p>Vastunagar, Mangalpalli (V), Ibrahimpatnam (M)</p>
            <p>Rangareddy District, Telangana - 501510</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Campus Life</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><i className="fas fa-phone"></i> +91 12345 67890</p>
            <p><i className="fas fa-envelope"></i> info@cvr.ac.in</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 CVR College of Engineering. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;