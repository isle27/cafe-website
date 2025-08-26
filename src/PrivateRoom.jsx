import React, { useState, useEffect } from "react";
import "./PrivateRoom.css";

export default function PrivateRooms() {
  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);


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

  const handleBookClick = (room) => {
    setSelectedRoom(room);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <div className="private-room-page">

     <div className="private-intro">
        <h1>Private Rooms</h1>
        <p>
          Whether it’s for an intimate gathering, quiet study time, or a special celebration, 
          our private rooms offer comfort and elegance tailored to your needs.
        </p>
      </div>

      <section className="menu-items">
        <div className="private-room-grid">

          
          <div className="private-room-card fade-in">
            <img src="/fcnCXZgS.jpg" alt="Cozy Corner" />
            <p className="desc">A quiet private space for 2–3 people.</p>
            <p className="price">$25/hr</p>
            <button onClick={() => handleBookClick("Cozy Corner")}>Book Now</button>
          </div>

          <div className="private-room-card fade-in">
            <img src="/gcy0cqoC.jpg" alt="Rustic Retreat" />
            <p className="desc">Warm, rustic design for up to 5 guests.</p>
            <p className="price">$40/hr</p>
            <button onClick={() => handleBookClick("Rustic Retreat")}>Book Now</button>
          </div>

          <div className="private-room-card fade-in">
            <img src="/5Zx7w3AM.jpg" alt="Elegant Hideaway" />
            <p className="desc">Perfect for small gatherings or work.</p>
            <p className="price">$55/hr</p>
            <button onClick={() => handleBookClick("Elegant Hideaway")}>Book Now</button>
          </div>

          <div className="private-room-card fade-in">
            <img src="/ccwritXG.jpg" alt="Classic Nook" />
            <p className="desc">Ideal for study or solo work.</p>
            <p className="price">$20/hr</p>
            <button onClick={() => handleBookClick("Classic Nook")}>Book Now</button>
          </div>
          

          <div className="private-room-card fade-in">
            <img src="/jri3nbFm.jpg" alt="Garden View" />
            <p className="desc">Bright and airy space overlooking greenery.</p>
            <p className="price">$35/hr</p>
            <button onClick={() => handleBookClick("Garden View")}>Book Now</button>
          </div>

          <div className="private-room-card fade-in">
            <img src="/txkiRCIE.jpg" alt="Lounge Suite" />
            <p className="desc">Comfortable sofas, great for friends.</p>
            <p className="price">$50/hr</p>
            <button onClick={() => handleBookClick("Lounge Suite")}>Book Now</button>
          </div>
          
      
        </div>
      </section>

      {showForm && (
        <>
          <div className="form-overlay" onClick={() => setShowForm(false)}></div>
          <div className="booking-form fade-in">
            <h2>Book {selectedRoom}</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email" required />
              <input type="date" required />
              <input type="time" required />
              <input type="number" placeholder="Number of People" min="1" max="20" required />
              <button type="submit">Confirm Booking</button>
            </form>
          </div>
        </>
      )}

      {/* Toast Notification */}
      {toast && <div className="toast">Booking Successful!</div>}

    </div>
  );
}
