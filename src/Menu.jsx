import React, { useEffect } from "react";
import "./Menu.css";

function Menu() {
  useEffect(() => {
    const cards = document.querySelectorAll(".menu-card");

    const handleScroll = () => {
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          card.style.animationDelay = `${index * 0.08}s`;
          card.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <header className="menu-hero">
      
          <h1 className="menu-title">Our Menu</h1>
       
      </header>

      {/* Menu Items */}
      <section className="menu-items">
        
        <h2 className="menu-category">Hot Drinks</h2>
        <div className="menu-grid">
          <div className="menu-card">
            <div className="image-container">
              <img src="/Creamy French Hot Chocolate.jpg" alt="Hot Chocolate" />
            </div>
            <div className="menu-card-content">
              <h3>Hot Chocolate</h3>
              <p>Creamy and rich with Belgian chocolate</p>
              <p className="price">$3.50</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/7XbRjtaR.jpg" alt="Latte" />
            </div>
            <div className="menu-card-content">
              <h3>Latte</h3>
              <p>Smooth espresso with steamed milk</p>
              <p className="price">$4.00</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Hot Toddy Mocktail Recipe_ Cozy Up Without the Booze - Thirsty Tales.jpg" alt="Hot Toddy Mocktail" />
            </div>
            <div className="menu-card-content">
              <h3>Hot Toddy Mocktail</h3>
              <p>Spiced apple & citrus blend</p>
              <p className="price">$4.00</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Cozy Up with a Creamy Pumpkin Chai Tea Latte Recipe!.jpg" alt="Chai Tea Latte" />
            </div>
            <div className="menu-card-content">
              <h3>Chai Tea Latte</h3>
              <p>Warm spices with steamed milk</p>
              <p className="price">$4.00</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Make Mochaccino_ Easy Chocolate Coffee Drink.jpg" alt="Mochaccino" />
            </div>
            <div className="menu-card-content">
              <h3>Mochaccino</h3>
              <p>Espresso, chocolate & steamed milk</p>
              <p className="price">$4.00</p>
            </div>
          </div>
        </div>

        <h2 className="menu-category">Cold Drinks</h2>
        <div className="menu-grid">
          <div className="menu-card">
            <div className="image-container">
              <img src="/Peach Iced Tea.jpg" alt="Peach Iced Tea" />
            </div>
            <div className="menu-card-content">
              <h3>Peach Iced Tea</h3>
              <p>Refreshing homemade peach tea</p>
              <p className="price">$4.50</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Refreshing Vanilla Strawberry Iced Tea - Use Your Noodles.jpg" alt="Vanilla Strawberry Iced Tea" />
            </div>
            <div className="menu-card-content">
              <h3>Vanilla Strawberry Iced Tea</h3>
              <p>Sweet & fruity summer blend</p>
              <p className="price">$5.00</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Double Chocolate Iced Mocha.jpg" alt="Chocolate Iced Mocha" />
            </div>
            <div className="menu-card-content">
              <h3>Chocolate Iced Mocha</h3>
              <p>Rich chocolate & espresso over ice</p>
              <p className="price">$4.50</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Caramel Hazelnut Iced Coffee [10 Minutes] - Chasety.jpg" alt="Hazelnut Iced Coffee" />
            </div>
            <div className="menu-card-content">
              <h3>Hazelnut Iced Coffee</h3>
              <p>Buttery hazelnut with cold brew</p>
              <p className="price">$5.00</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Brownie Milkshake ~ Recipe _ Queenslee Appétit.jpg" alt="Brownie Milkshake" />
            </div>
            <div className="menu-card-content">
              <h3>Brownie Milkshake</h3>
              <p>Decadent chocolate brownie shake</p>
              <p className="price">$7.00</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Sip Into Summer With Refreshing Peach Lemonade _ Quench Your Thirst - My Homemade Recipe.jpg" alt="Peach Lemonade" />
            </div>
            <div className="menu-card-content">
              <h3>Peach Lemonade</h3>
              <p>Fresh & tangy summer favorite</p>
              <p className="price">$5.00</p>
            </div>
          </div>
        </div>

        <h2 className="menu-category">Pastries & Simple Breakfast</h2>
        <div className="menu-grid">
          <div className="menu-card">
            <div className="image-container">
              <img src="/𝙹𝚊𝚍𝚎 𝙻𝚒𝚖 _ 𝚂𝚘𝚞𝚛𝚍𝚘𝚞𝚐𝚑 𝙱𝚛𝚎𝚊𝚍….jpg" alt="Italian Doughnuts" />
            </div>
            <div className="menu-card-content">
              <h3>Italian Doughnuts</h3>
              <p>Soft and fluffy with sugar dusting</p>
              <p className="price">$2.50</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Chocolate Cinnamon Rolls.jpg" alt="Chocolate Cinnamon Rolls" />
            </div>
            <div className="menu-card-content">
              <h3>Chocolate Cinnamon Rolls</h3>
              <p>Warm gooey chocolate filling</p>
              <p className="price">$3.00</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Red Velvet Strawberry Cheesecake.jpg" alt="Red Velvet Strawberry Cheesecake" />
            </div>
            <div className="menu-card-content">
              <h3>Red Velvet Strawberry Cheesecake</h3>
              <p>Creamy with fresh strawberries</p>
              <p className="price">$3.50</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Strawberry Chimichangas.jpg" alt="Strawberry Chimichangas" />
            </div>
            <div className="menu-card-content">
              <h3>Strawberry Chimichangas</h3>
              <p>Crispy with sweet strawberry filling</p>
              <p className="price">$5.00</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Strawberry Napoleons for Valentines Day.jpg" alt="Strawberry Napoleons" />
            </div>
            <div className="menu-card-content">
              <h3>Strawberry Napoleons</h3>
              <p>Flaky layers with fresh cream</p>
              <p className="price">$2.90</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/🥣 Creamy Fruit Salad – A Sweet & Chilled Delight….jpg" alt="Creamy Fruit Salad" />
            </div>
            <div className="menu-card-content">
              <h3>Creamy Fruit Salad</h3>
              <p>Fresh fruits in light cream</p>
              <p className="price">$6.00</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Crispy Hash Brown Egg Cups with Melted Cheese.jpg" alt="Hash Brown Egg Cups" />
            </div>
            <div className="menu-card-content">
              <h3>Hash Brown Egg Cups</h3>
              <p>Crispy with melted cheese</p>
              <p className="price">$5.00</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Cottage Cheese with Fruit Breakfast Bowls.jpg" alt="Cottage Cheese Breakfast" />
            </div>
            <div className="menu-card-content">
              <h3>Cottage Cheese Breakfast</h3>
              <p>With fresh seasonal fruit</p>
              <p className="price">$6.00</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/American Pancake Cereal.jpg" alt="Pancake Cereal" />
            </div>
            <div className="menu-card-content">
              <h3>Pancake Cereal</h3>
              <p>Mini pancakes with maple syrup</p>
              <p className="price">$4.00</p>
            </div>
          </div>

          <div className="menu-card">
            <div className="image-container">
              <img src="/Brioche French Toast with Blueberry Compote — One Pot Pia.jpg" alt="French Toast" />
            </div>
            <div className="menu-card-content">
              <h3>French Toast with Blueberry Compote</h3>
              <p>Thick brioche with fresh compote</p>
              <p className="price">$8.00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;