import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="top-bar">
    <div className="logo">
      <img src="images/wiki.svg" alt="" />
    </div>
    <ul className="menu">
      <li className="menu__item">
        <NavLink
          className="menu__link"
          activeClassName="menu__link--active"
          exact
          to="/"
        >Home</NavLink>
      </li>
      <li className="menu__item">
        <NavLink
          className="menu__link"
          activeClassName="menu__link--active"
          to="/about"
        >About</NavLink>
      </li>
      <li className="menu__item">
        <NavLink
          className="menu__link"
          activeClassName="menu__link--active"
          to="/settings"
        >Settings</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
