import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Menu from "./Menu.jsx";
import About from "./About.jsx";

import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />       
          <Route path="menu" element={<Menu />} /> 
          <Route path="about" element={<About />} />
          <Route path="private-room" element={<PrivateRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
