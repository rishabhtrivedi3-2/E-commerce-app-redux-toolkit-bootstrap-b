import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";

function Logout() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="align-content-center  justify-center items-center "></div>
      <button
        className="btn btn-btn-outline-dark border border-1  mt-3 align-content-between "
        onClick={() => {
          localStorage.removeItem("login");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
