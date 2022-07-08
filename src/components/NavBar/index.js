import React from "react";
import { Link, Route } from "wouter";
import "./styles.css";
function NavBar({
  routes = [{ name: "", route: "", filter: "" }],
  setFilter,
  filter,
}) {
  return (
    <nav className="navbar-container">
      <Route>
        <ul>
          {routes.map((route) => (
            <li>
              <a
                className={`navbar-container__item ${
                  route.filter === filter
                    ? "navbar-container__item--active"
                    : ""
                }`}
                href={routes.route}
                onClick={(e) => {
                  e.preventDefault();
                  setFilter(route.filter);
                }}
              >
                {route.name}
              </a>
            </li>
          ))}
        </ul>
      </Route>
    </nav>
  );
}

export default NavBar;
