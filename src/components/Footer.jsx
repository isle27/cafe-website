import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
  
          <div className="footer-content">
                  <p>© {new Date().getFullYear()} Oak & Brew Café. All rights reserved.</p>
                  <div className="footer-contact">
                    <p>Email: contact@oakandbrew.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Coffee Lane, Brewtown, USA</p>
                  </div>
                </div>
                
      
      </footer>
  );
};

export default Footer;
