import "./App.css";
import Api from "./components/Api";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./components/About";
import Products from "./components/Products";
import Singlepro from "./components/Singlepro";
import Cart from "./components/store/Cart";
import { useState } from "react";
import Login from "./components/Login";
import ProtectedRoute from "./ProtectedRoute";
import Logout from "./components/Logout";
function App() {
  return (
    <div className="container-fluid">
      <div className="d-grid  ">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" Component={Api} />
            <Route path="/home" Component={Api} />
            <Route path="/about" Component={About} />
            <Route path="/Products/:id" Component={Singlepro} />
            <Route path="/cart" element={<ProtectedRoute Component={Cart} />} />

            <Route path="/Login" Component={Login} />
            <Route path="/logout" Component={Logout} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
