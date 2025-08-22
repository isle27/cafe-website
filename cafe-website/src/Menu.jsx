import React, { useEffect } from "react";
import "./Menu.css";

function Menu() {
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
    <div className="menu-page">
      <header className="menu-hero">
        <h1 className="menu-title">Our Menu</h1>
      </header>

      <section className="menu-items">
  <h2 className="menu-category">Hot Drinks</h2>
  <div className="menu-grid">
    <div className="menu-card">
      <img src="/Creamy French Hot Chocolate.jpg" alt="Hot Drink 1" />
      <h3>Hot Chocolate</h3>
      <p className="price">$3.50</p>
    </div>
    <div className="menu-card">
      <img src="/7XbRjtaR.jpg" alt="Hot Drink 2" />
      <h3>Latte</h3>
      <p className="price">$4.00</p>
    </div>
    <div className="menu-card">
      <img src="/Hot Toddy Mocktail Recipe_ Cozy Up Without the Booze - Thirsty Tales.jpg" alt="Hot Drink 2" />
      <h3>Hot Toddy Mocktail</h3>
      <p className="price">$4.00</p>
    </div>
    <div className="menu-card">
      <img src="/Cozy Up with a Creamy Pumpkin Chai Tea Latte Recipe!.jpg " alt="Hot Drink 2" />
      <h3>Chai Tea Latte</h3>
      <p className="price">$4.00</p>
    </div>
    <div className="menu-card">
      <img src="/Make Mochaccino_ Easy Chocolate Coffee Drink.jpg" alt="Hot Drink 2" />
      <h3>Make Mochaccino</h3>
      <p className="price">$4.00</p>
    </div>
  </div>

  <h2 className="menu-category">Cold Drinks</h2>
  <div className="menu-grid">
    <div className="menu-card">
      <img src="/Peach Iced Tea.jpg" alt="Cold Drink 1" />
      <h3>Peach Iced Tea</h3>
      <p className="price">$4.50</p>
    </div>
    <div className="menu-card">
      <img src="/Refreshing Vanilla Strawberry Iced Tea - Use Your Noodles.jpg" alt="Cold Drink 2" />
      <h3>Vanilla Strawberry Iced Tea</h3>
      <p className="price">$5.00</p>
    </div>
    <div className="menu-card">
      <img src="/Double Chocolate Iced Mocha.jpg" alt="Cold Drink 1" />
      <h3> Chocolate Iced Mocha</h3>
      <p className="price">$4.50</p>
    </div>
    <div className="menu-card">
      <img src="/Caramel Hazelnut Iced Coffee [10 Minutes] - Chasety.jpg" alt="Cold Drink 2" />
      <h3>Hazelnut Iced Coffee</h3>
      <p className="price">$5.00</p>
    </div>
     <div className="menu-card">
      <img src="/Brownie Milkshake ~ Recipe _ Queenslee Appétit.jpg" alt="Cold Drink 2" />
      <h3>Brownie Milkshake</h3>
      <p className="price">$7.00</p>
    </div>
    <div className="menu-card">
      <img src="/Sip Into Summer With Refreshing Peach Lemonade _ Quench Your Thirst - My Homemade Recipe.jpg" alt="Cold Drink 2" />
      <h3>Peach Lemonade</h3>
      <p className="price">$5.00</p>
    </div>

  </div>

  <h2 className="menu-category">Pastries/Simple Breakfast</h2>
  <div className="menu-grid">
    <div className="menu-card">
      <img src="/𝙹𝚊𝚍𝚎 𝙻𝚒𝚖 _ 𝚂𝚘𝚞𝚛𝚍𝚘𝚞𝚐𝚑 𝙱𝚛𝚎𝚊𝚍….jpg" alt="Pastry 1" />
      <h3>Italian Doughnuts</h3>
      <p className="price">$2.50</p>
    </div>
    <div className="menu-card">
      <img src="/Chocolate Cinnamon Rolls.jpg" alt="Pastry 2" />
      <h3>Chocolate Cinnamon</h3>
      <p className="price">$3.00</p>
    </div>
    <div className="menu-card">
      <img src="/Red Velvet Strawberry Cheesecake.jpg" alt="Pastry 1" />
      <h3>Red Velvet Strawberry Cheesecake</h3>
      <p className="price">$3.50</p>
    </div>
    <div className="menu-card">
      <img src="/Strawberry Chimichangas.jpg" alt="Pastry 2" />
      <h3>Strawberry Chimichangas</h3>
      <p className="price">$5.00</p>
    </div>
    <div className="menu-card">
      <img src="/Strawberry Napoleons for Valentines Day.jpg" alt="Pastry 1" />
      <h3>Strawberry Napoleons</h3>
      <p className="price">$2.90</p>
    </div>
    <div className="menu-card">
      <img src="/🥣 Creamy Fruit Salad – A Sweet & Chilled Delight….jpg" alt="Pastry 2" />
      <h3>Creamy Fruit Salad </h3>
      <p className="price">$6.00</p>
    </div>
    <div className="menu-card">
      <img src="/Crispy Hash Brown Egg Cups with Melted Cheese.jpg" alt="Pastry 2" />
      <h3>Crispy Hash Brown Egg Cups with Melted Cheese</h3>
      <p className="price">$5.00</p>
    </div>
    <div className="menu-card">
      <img src="/Cottage Cheese with Fruit Breakfast Bowls.jpg" alt="Pastry 2" />
      <h3>Cottage Cheese with Fruit Breakfast</h3>
      <p className="price">$6.00</p>
    </div>
    <div className="menu-card">
      <img src="/American Pancake Cereal.jpg" alt="Pastry 2" />
      <h3>American Pancake Cereal</h3>
      <p className="price">$4.00</p>
    </div>
    <div className="menu-card">
      <img src="/Brioche French Toast with Blueberry Compote — One Pot Pia.jpg" alt="Pastry 2" />
      <h3>rioche French Toast with Blueberry Compote</h3>
      <p className="price">$8.00</p>
    </div>
  </div>
</section>

    </div>
  );
}

export default Menu;
