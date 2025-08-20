import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const handleScroll = () => {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // trigger on load

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="App">
     
      <header className="navbar">
        <nav>
          <button>Home</button>
          <button>Menu</button>
          <button>About</button>
          <button>Private Room</button>
        </nav>
      </header>

      <header className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to Oak & Brew</h1>
          <p className="hero-subtext">A cozy space for coffee, pastries, and moments of calm</p>
          <div className="hero-buttons">
            <button>Book a Table</button>
            <button>Order Online</button>
          </div>
        </div>
      </header>
      {/* About + Hours Section */}
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


export default App;
