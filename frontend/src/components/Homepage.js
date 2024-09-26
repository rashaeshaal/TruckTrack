import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import truckImage from '../assets/truck-250x250.jpg';
import truckk from '../assets/19-feet.jpg';
function HomePage() {
  return (
    <div className="HomePage">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img src="https://themewagon.github.io/transportz/assets/img/logo.png" alt="" />
          <h1>Truck</h1>
        </div>
        <div className="contact-info">
          <span>Call Us: (+71) 258964785</span>
          <span>Email: trucktRack@gmail.com</span>
        </div>
        <nav className="navbar">
          <ul>
            <li><Link to="#home">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#company">Company</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Unbeatable trucking & Transport Services</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
          <div className="hero-buttons">
            <button className="read-more">Read More</button>
            <button className="get-quote">Get a Quote</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={truckImage} alt="Truck" />
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              We are a leading trucking company providing top-notch services worldwide. Our mission is to deliver exceptional transport and logistics solutions to our customers.
              We strive for excellence and efficiency in every task we undertake, ensuring a seamless experience for our clients.
            </p>
            <p>
              With years of experience in the transportation industry, we are committed to providing safe, reliable, and fast services.
              From freight forwarding to storage solutions, we cater to a variety of logistical needs.
            </p>
          </div>
          <div className="about-image">
            <img src={truckk} alt="About Us" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <p>We offer a wide range of transport services including freight, logistics, and more.</p>
      </section>

      {/* Company Section */}
      <section id="company" className="company">
        <h2>Our Company</h2>
        <p>Learn more about our company, our mission, and our dedicated team.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us for all your transportation needs. We're here to help!</p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Transportz Info */}
          <div className="footer-section">
            <h3>Transportz</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className="social-icons">
              <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
              <a href="https://plus.google.com"><i className="fab fa-google-plus"></i></a>
              <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          {/* Address Section */}
          <div className="footer-section">
            <h3>Address</h3>
            <p>Healing Center, 176 W Street, New York, NY 10014, US</p>
            <p>(+71) 8522369417</p>
            <p>transportz@gmail.com</p>
          </div>

          {/* Links Section */}
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#company">Company</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p></p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
