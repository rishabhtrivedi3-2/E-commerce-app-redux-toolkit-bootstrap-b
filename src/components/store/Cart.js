import { prod } from "mathjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./createSlice";
function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeCart = (id) => {
    dispatch(remove(id));
  };
  return (
    <div classNameName="container ">
      <div classNameName="row">
        <div classNameName="col-md-3">
          <div classNameName="card">
            {products &&
              products.map((k, i) => {
                return (
                  <>
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={products[i].image}
                            className="img-fluid rounded-start d-flex justify-content-center"
                            height="40px"
                            width="40px"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{products[i].title}</h5>
                            <p className="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. This
                              content is a little bit longer.
                            </p>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                Last updated 3 mins ago
                              </small>
                            </p>
                            <button
                              className="btn btn-outline-danger"
                              onClick={() => {
                                removeCart(products[i].id);
                              }}
                            >
                              remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
