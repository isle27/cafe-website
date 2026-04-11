
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import coffeeLogo from "../assets/ChatGPT Image Apr 8, 2026, 05_40_16 AM.png"; 

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
     <div className="logo">
        <img src={coffeeLogo} alt="Coffee Logo" />
      </div> 
      <div className="nav-buttons">
        <Link to="/">
          <button className="nav-btn">Home</button>
        </Link>
        <Link to="/about">
          <button className="nav-btn">About</button>
        </Link>
        <Link to="/menu">
          <button className="nav-btn"> Menu</button>
        </Link>
        <Link to="/privateRoom">
          <button className="nav-btn">Private Room</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
