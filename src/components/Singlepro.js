import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { add } from "./store/createSlice";
import { HiOutlineMinusSmall } from "react-icons/hi2";

function Singlepro({ data }) {
  const [i, setitem] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const login = localStorage.getItem("login");
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setitem(d);
      });
  }, [i]);
  const addCart = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      {i && i[id] ? (
        <>
          <div className="container my-6 py-3">
            <div className="row py-5">
              <div className="col-md-6 d-flex flex-column justify-content-center ">
                <img
                  src={i[id].image}
                  alt={i[id].title}
                  srcset=""
                  height="400px"
                  width="400px"
                />
              </div>

              <div className="col-md-6">
                <h6 className="display-5 text-uppercase my-3">
                  {i[id].category}
                </h6>
                <h1 className="display-5 fw-bold">{i[id].title}</h1>
                <h2 className=" display-5  my-4 mx-4">${i[id].price}</h2>
                <p className="lead fs-3 ">{i[id].description}</p>
                <div className="mt-3 mb-3">
                  <div className="border border-1 border-red-950 border-  ">
                    <button className="btn border-t-green-600  ">
                      <HiOutlineMinusSmall />
                    </button>
                    <p>c</p>
                    <button>+</button>
                  </div>
                </div>
                {!login ? (
                  <NavLink
                    className="btn btn-outline-danger mx-3 my-auto "
                    to="/login"
                  >
                    Add Cart
                  </NavLink>
                ) : (
                  <button
                    className="btn btn-outline-danger mx-3 my-auto  "
                    onClick={() => addCart(i[id])}
                  >
                    Add to cart
                  </button>
                )}
                <NavLink className="btn btn-outline-primary " to="/cart">
                  Go toCart
                </NavLink>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </>
  );
}
export default Singlepro;
