import { prod } from "mathjs";
import React, { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Router, useParams } from "react-router-dom";
import Singlepro from "./Singlepro";

function Products({ item }) {
  const [filter, setfilter] = useState([]);
  useEffect(() => {
    setfilter(item);
  }, [item]);
  const filterProduct = (cat) => {
    const updatelist = item.filter((x) => x.category === cat);
    setfilter(updatelist);
  };
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="md:bg-black">
            <h1 className="  text-center mt-4 display-6 fw-4 fw-bold ">
              Our Latest Products
            </h1>
          </div>
          <hr className="divider mb-4" />
          <div className="col ">
            <div className="buttons d-flex  justify-content-center ">
              <button
                className="btn btn-outline-dark me-4 fs-3  "
                onClick={() => setfilter(item)}
              >
                All
              </button>
              <button
                className="btn btn-outline-dark me-4 fs-3 "
                onClick={() => filterProduct("men's clothing")}
              >
                Men's Clothing
              </button>
              <button
                className="btn btn-outline-dark me-4  fs-3"
                onClick={() => filterProduct("women's clothing")}
              >
                Women's Clothing
              </button>
              <button
                className="btn btn-outline-dark me-4 fs-3"
                onClick={() => filterProduct("jewelery")}
              >
                Jewelery
              </button>
              <button
                className="btn btn-outline-dark me-4 fs-3"
                onClick={() => filterProduct("electronics")}
              >
                Electronic's
              </button>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            {filter &&
              filter.map((product, i) => {
                return (
                  <>
                    {/* <div className=""> */}
                    <div className=" mt-4 xs:fs-2 col-md-3">
                      <div className="card  mt-3 shadow-lg h-100  ">
                        <img
                          src={product && product.image}
                          className="card-img-top col-md-3 mt-3 mx-2 px-2  lg:object-cover aspect-4/3"
                        />
                        <div className="card-body ">
                          <h5 className="card-title fs-2 fw-5 ">
                            {product.title}
                          </h5>
                          <p className="card-text  d-flex md-4 justify-content-center text-slate-800 mx-auto col-lg-3-5">
                            {product.description}
                          </p>
                          <h4 className="mt-2 font-medium fs-1">
                            ${product.price}
                          </h4>
                          <div className="card-body ">
                            <div>
                              <NavLink
                                to={`/Products/${product.id - 1}`}
                                className="btn btn-primary"
                              >
                                Buy Now
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <Singlepro data={item} />;
    </>
  );
}

export default Products;
