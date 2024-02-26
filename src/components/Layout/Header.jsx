
import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <>
    

    <header className={classes.header}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes.isActive : classes.notActive
          }
        >
          <h1>Let's Taste</h1>
        </NavLink>
        <NavLink
          to="indian"
          className={({ isActive }) =>
            isActive ? classes.isActive : classes.notActive
          }
        >
          <h3>Indian</h3>
        </NavLink>
        <NavLink
          to="italian"
          className={({ isActive }) =>
            isActive ? classes.isActive : classes.notActive
          }
        >
          <h3>Italian</h3>
        </NavLink>
        <NavLink
          to="mocktails"
          className={({ isActive }) =>
            isActive ? classes.isActive : classes.notActive
          }
        >
          <h3>Mocktails</h3>
        </NavLink>
        <NavLink
          to="mexican"
          className={({ isActive }) =>
            isActive ? classes.isActive : classes.notActive
          }
        >
          <h3>Mexican</h3>
        </NavLink>

        <NavLink
          to="dessert"
          className={({ isActive }) =>
            isActive ? classes.isActive : classes.notActive
          }
        >
          <h3>Desserts</h3>
        </NavLink>
        <HeaderCartButton showCart={props.showCart} />
      </header>


      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};
export default Header;

