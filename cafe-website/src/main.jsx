import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
<<<<<<< HEAD
import Menu from "./Menu.jsx"
=======
import Home from "./Home.jsx";
>>>>>>> home-page



import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
<<<<<<< HEAD
          <Route index element={<Menu />} />
          
=======
          <Route index element={<Home />} />
>>>>>>> home-page
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
<<<<<<< HEAD
);
=======
);
>>>>>>> home-page
