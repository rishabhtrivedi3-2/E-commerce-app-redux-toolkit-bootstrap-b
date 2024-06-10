import React, { useEffect, useState } from "react";
import DATA from "../Data";
import { prod } from "mathjs";
import Products from "./Products";
import Singlepro from "./Singlepro";
import Navbar from "./Navbar";
function Api() {
  const FetchData = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setData(d);
      });
  };
  const [data, setData] = useState([]);
  const [produc, setpro] = useState([]);
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel h-6"
      >
        <div className="carousel-inner  d-grid grid-column justify-content-center w-full h-60">
          <div className="carousel-item active ">
            <div className="text-center fs-2   ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_GN_tr2L3gQITUfR7DXjkPLh4NK9ormMdFM2GqP20UU90K7reYqtN6V3cLgCS-AWFl8&usqp=CAU"
                className="w-full h-60  mx-auto"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPYdCCGdmeKCey97MeWjQ2HUMZYDhy5bWXgzo3w9K3fHWdO0udONXmXP_3EQgWzve-g4&usqp=CAU"
                className="  w-100 h-50 bg-dark b-2px red"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZFG6fgvV4HY2fPfnmFFd8by1PIyaqG_2Rj0E1655yAMJ_I0T4AGpsvEyxuxLkSQsO8g&usqp=CAU"
                className=" w-100 h-50 bg-dark b-2px red"
              />
            </div>
          </div>
        </div>

        <Products item={data} />
      </div>
    </>
  );
}

export default Api;
