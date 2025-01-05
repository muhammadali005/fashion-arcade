import React from "react";
import Products from "./Products";
import img from "../assets/fashion3.png"; // Updated path

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0 rounded-0">
        <img
          src={img}
          className="card-img"
          alt="Background"
          style={{ height: "550px", objectFit: "cover" }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 text-red fw-bolder mb-0">
              NEW ARRIVALS
            </h5>
            <p className="card-text fw-bolder lead fs-2">CHECKOUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
