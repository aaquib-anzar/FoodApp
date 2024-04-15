import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
const Header = (props) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#8a2b06" }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              color: "white",
              fontFamily: "Hervetica",
              fontSize: "30px",
            }}
          >
            Let's Taste
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="indian"
                  style={{
                    color: "white",
                    fontFamily: "Hervetica",
                    fontSize: "30px",
                  }}
                >
                  Indian
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="italian"
                  style={{
                    color: "white",
                    fontFamily: "Hervetica",
                    fontSize: "30px",
                  }}
                >
                  Italian
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="mexican"
                  style={{
                    color: "white",
                    fontFamily: "Hervetica",
                    fontSize: "30px",
                  }}
                >
                  Mexican
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="mocktails"
                  style={{
                    color: "white",
                    fontFamily: "Hervetica",
                    fontSize: "30px",
                  }}
                >
                  Mocktails
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="dessert"
                  style={{
                    color: "white",
                    fontFamily: "Hervetica",
                    fontSize: "30px",
                  }}
                >
                  Desserts
                </Link>
              </li>
            </ul>

            <HeaderCartButton showCart={props.showCart} />
          </div>
        </div>
      </nav>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};
export default Header;
