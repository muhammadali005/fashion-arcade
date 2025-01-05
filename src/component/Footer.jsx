import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Welcome to our Fashion Arcade! We offer a wide range of quality products, including clothing, jewelry, and electronics, at unbeatable prices. Shop with confidence and experience the best in online shopping.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-white text-decoration-none">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="text-white text-decoration-none">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="text-white text-decoration-none">
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-white text-decoration-none">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">Contact Info</h5>
            <p>
            <i className="fa fa-location-arrow"></i>&nbsp;&nbsp; Abc Street, Karachi, Pakistan.
            </p>
            <p>
              <i className="fa fa-phone me-2"></i> +92 300 0211570
            </p>
            <p>
              <i className="fa fa-envelope me-2"></i> m.aleydev2gmail.com
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Fashion Arcade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
