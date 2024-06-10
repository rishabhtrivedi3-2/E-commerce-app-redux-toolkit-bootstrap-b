import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function ProtectedRoute(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    {
      !login ? navigate("/login") : navigate("/home");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}

export default ProtectedRoute;
