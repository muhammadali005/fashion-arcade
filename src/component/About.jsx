import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold text-dark mb-4">
              About Fashion Arcade
            </h1>
            <p className="lead mb-4">
              Welcome to Fashion Arcade, where style meets innovation. Since our
              establishment, we've been at the forefront of fashion retail,
              bringing you the latest trends and timeless classNameics from around
              the world.
            </p>
            <p className="mb-5">
              Our carefully curated collection features pieces from both
              emerging designers and established brands, ensuring that you'll
              find unique styles that speak to your personal aesthetic.
            </p>
            <button
              className="btn btn-dark btn-lg px-4 mb-5"
              onClick={() => navigate("/products")}
            >
              View Products
            </button>
          </div>
          <div className="col-lg-6">
            <div className="text-center p-4 bg-light rounded-3 shadow-sm">
              <h2 className="h3 mb-4">Our Values</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card h-100 border-0 bg-transparent">
                    <div className="card-body">
                      <div className="bg-dark text-white rounded-circle d-inline-flex p-3 mb-3">
                        <i className="bi bi-check-lg fs-4"></i>
                      </div>
                      <h5 className="card-title">Quality First</h5>
                      <p className="card-text text-muted">
                        Premium materials and expert craftsmanship in every
                        piece
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100 border-0 bg-transparent">
                    <div className="card-body">
                      <div className="bg-dark text-white rounded-circle d-inline-flex p-3 mb-3">
                        <i className="bi bi-truck fs-4"></i>
                      </div>
                      <h5 className="card-title">Fast Delivery</h5>
                      <p className="card-text text-muted">
                        Quick and reliable shipping to your doorstep
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center mt-5 g-4">
          <div className="col-md-4">
            <div className="p-4 bg-light rounded-3 shadow-sm">
              <h3 className="display-6 fw-bold text-dark">10k+</h3>
              <p className="text-muted mb-0">Happy Customers</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-light rounded-3 shadow-sm">
              <h3 className="display-6 fw-bold text-dark">5k+</h3>
              <p className="text-muted mb-0">Premium Products</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-light rounded-3 shadow-sm">
              <h3 className="display-6 fw-bold text-dark">15+</h3>
              <p className="text-muted mb-0">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
