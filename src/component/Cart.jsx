import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delCart } from "../redux/action";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = state.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container py-5 flex-grow-1">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Shopping Cart</h1>
            <hr />
          </div>
        </div>
        {state.length === 0 ? (
          <div className="text-center">
            <h2>Your cart is empty</h2>
          </div>
        ) : (
          <>
            <div className="row">
              {state.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card h-100">
                    <img
                      src={product.image}
                      className="card-img-top p-3"
                      alt={product.title}
                      style={{ height: "200px", objectFit: "contain" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">Price: ${product.price}</p>
                      <p className="card-text">Quantity: {product.qty}</p>
                      <button
                        className="btn btn-danger mt-auto"
                        onClick={() => removeItem(product)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-4">
              <div className="col-md-12 text-end">
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                <button
                  className="btn btn-success btn-lg mt-3"
                  onClick={() => navigate("/login")}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
