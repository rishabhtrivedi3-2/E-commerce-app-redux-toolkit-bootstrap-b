import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    localStorage.setItem("login", [email, password], true);
    const l = localStorage.getItem("login");
    if (l.length > 1) {
      localStorage.setItem("login", l, [email, password]);
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };
  const navigate = useNavigate();

  const login = localStorage.getItem("login");

  useEffect(() => {
    if (login) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex min-h-screen justify-center text-center bg-gray-100">
      <div className="w-50 mx-auto max-w-md p-8 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="p-4 text-gray-700 mb-2 fs-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block p-4 text-gray-700 mb-2 fs-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 rounded bg-black text-white font-bold hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
