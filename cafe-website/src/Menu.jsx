import React from "react";
import "./Menu.css";

const menuItems = [
  {
    name: "Cappuccino",
    description: "Rich espresso with steamed milk and foam",
    price: "$4.50",
    image: "/assets/cappuccino.jpg",
  },
  {
    name: "Latte",
    description: "Smooth espresso with creamy milk",
    price: "$4.00",
    image: "/assets/latte.jpg",
  },
  {
    name: "Croissant",
    description: "Flaky buttery pastry",
    price: "$2.50",
    image: "/assets/croissant.jpg",
  },
  {
    name: "Green Tea",
    description: "Fresh and soothing green tea",
    price: "$3.00",
    image: "/assets/greentea.jpg",
  },
];

export default function Menu() {
  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-img" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
