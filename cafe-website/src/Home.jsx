// src/Home.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./App.css";

export default function Home() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible"); 
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Home">
        <section className="home-hero">
        <div className="home-hero-overlay">
            <h1 className="home-hero-title">Welcome to Oak & Brew</h1>
            <p className="home-hero-subtext">A cozy space for coffee, pastries, and moments of calm</p>
            <div className="home-hero-buttons">
            <Link to="/private-rooms" className="book-btn">
                Book a Room
            </Link>
            <Link to="/menu" className="order-btn">
                Explor Menu
            </Link>
            </div>
        </div>
</section>

      <section className="about-section fade-in" id="about">
        <div className="about-content">
          <h2>About Oak & Brew</h2>
          <p>
            Oak & Brew is a cozy café where coffee, pastries, and warm moments come together. 
            We pride ourselves on a relaxing atmosphere and high-quality ingredients for every
            cup and bite.
          </p>

          <div className="hours-location">
            <div className="hours">
              <h3>Hours</h3>
              <p>Mon-Fri: 7am - 7pm</p>
              <p>Sat-Sun: 8am - 8pm</p>
            </div>
            <div className="location">
              <h3>Location</h3>
              <p>123 Coffee Lane</p>
              <p>Forest City, USA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
