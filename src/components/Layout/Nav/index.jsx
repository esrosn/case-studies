import React from "react";
import { Link } from "react-router-dom";
import menu from "../../../images/menu.svg";
const Nav = ({ handleMenuToggle }) => {
  return (
    <nav className="dt w-100 bb b--black-10 pa3 ph3-ns flex justify-center">
      <Link
        className="flex items-center mid-gray link dim w-50 mb1"
        to="/"
        title="Home"
      >
        <h1 className="f1 ma0">CASE STUDIES</h1>
      </Link>
      <div className="menu-items flex items-center w-50 ml4 tl">
        <div className="flex flex-column justify-around h-75 w-25 ml3-ns">
          <Link
            className="link dim dark-gray f6 f3-ns dib w-50-ns"
            to="/about"
            title="About"
          >
            About
          </Link>
          <div className="bb mv3 b--black-10" />
          <div
            onClick={handleMenuToggle}
            className="menu flex items-end justify-between"
          >
            <p className="link dim dark-gray f6 f3-ns dib" title="Browse">
              Browse
            </p>
            <img className="dib" src={menu} alt="Menu Icon" />
          </div>
        </div>
        <div className="flex flex-column justify-center h-75 w-25 ml5-ns">
          <Link
            className="link dim dark-gray f6 f3-ns dib"
            to="/store"
            title="Store"
          >
            Store
          </Link>
          <div className="bb mv3 b--black-10" />
          <Link
            className="link dim dark-gray f6 f3-ns dib"
            to="/submit"
            title="Submit"
          >
            Submit
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
