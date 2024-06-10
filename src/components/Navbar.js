import React, { useEffect, useState } from "react";
import { LuUserCircle } from "react-icons/lu";
import { useSelector } from "react-redux";
import { BrowserRouter, NavLink } from "react-router-dom";
function Navbar() {
  const item = localStorage.getItem("login");

  const cartProducts = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
        <NavLink className="nav-link active  text-light" to="/home">
          <h1 className="text-success ">
            Flip<span className="text-danger">kart</span>
          </h1>
        </NavLink>
        <div className="container ">
          <div className="mx-auto" id="navbarNavDropdown">
            <ul className="navbar-nav  ">
              <li className="nav-item ">
                <NavLink
                  className="nav-link   text-light  hover:text-red-500"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link  text-light hover:bg-orange-400"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {item ? (
          <NavLink className="nav-link  text-light" to="/logout">
            <LuUserCircle />
          </NavLink>
        ) : (
          <NavLink className="nav-link  text-light" to="/login">
            Login
          </NavLink>
        )}

        <NavLink
          to="/cart"
          className="nav-link active text-light mx-4
 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="56"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          <span className="cart-count text-light">{cartProducts.length}</span>
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
