
import React, { useEffect } from "react";
import "./about.css";

function About() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      fadeElements.forEach(el => {
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
    <div className="about-page">
      <header className="about-hero">
        <h1 className="about-title fade-in">About Oak & Brew</h1>
        <p className="about-subtext fade-in">
          A cozy café where every cup tells a story. We focus on quality, warmth, and a place to relax.
        </p>
        
        <div className="card-grid">
    <div className="history-card">
      <img src="/raphael-ai(3).jpeg" alt="Hot Drink 1" />
      <h3>LA Branch</h3>
      <p className="location">LA, USA</p>
    </div>

    <div className="history-card">
      <img src="/245yohNN.jpg" alt="Hot Drink 2" />
      <h3>Chicago Branch</h3>
      <p className="location">Downtown, Chicago</p>
    </div>

  </div>
       
      </header>

      <section className="about-section fade-in">
        <h2>Our Mission</h2>
        <p>
          To create a welcoming space where every guest feels at home. We serve carefully crafted coffee, fresh pastries, and comforting flavors in a cozy, inviting atmosphere. Whether you come to relax, meet with friends, or simply enjoy a quiet moment, our goal is to make every visit feel special and memorable.
        </p>
      </section>

      <section className="about-section fade-in">
        <h2>Our Story</h2>
        <p>
          To provide more than just coffee and pastries we want to offer a space that feels comforting and welcoming to everyone who walks in. Our focus is on rich, carefully brewed coffee, freshly made pastries, and an atmosphere that balances warmth with calm. Whether you’re here to catch up with friends, enjoy a quiet coffee date, or simply take a break from the day, our mission is to make the café a place where people feel relaxed, cared for, and at home.
        </p>
      </section>

      <section className="about-section fade-in">
        <h2>Hours & Location</h2>
        <div className="hours-location">
          <div>
            <h3>Hours</h3>
            <p>Mon-Fri: 7am - 7pm</p>
            <p>Sat-Sun: 8am - 8pm</p>
          </div>
          <div>
            <h3>Location</h3>
            <p>123 Coffee Lane</p>
            <p>Forest City, USA</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
