import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Menu from "./Menu.jsx";

import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />       {/* Home page */}
          <Route path="menu" element={<Menu />} /> {/* Menu page */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
