import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => (
  <nav className="top-bar">
    <div className="logo">
      <img src="images/wiki.svg" alt="" />
    </div>
    <ul className="menu">
      <li className="menu__item">
        <IndexLink
          className="menu__link"
          activeClassName="menu__link--active"
          to="/"
        >Home</IndexLink>
      </li>
      <li className="menu__item">
        <Link
          className="menu__link"
          activeClassName="menu__link--active"
          to="/about"
        >About</Link>
      </li>
      <li className="menu__item">
        <Link
          className="menu__link"
          activeClassName="menu__link--active"
          to="/settings"
        >Settings</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
