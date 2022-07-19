import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/STAR_WARS_LOGO.webp";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const { store } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid text-light">
        <img src={Logo} style={{ height: "30px" }}></img>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link text-light active "
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Link
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light disabled">Disabled</a>
            </li>
          </ul>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {!!store.favorites &&
                store.favorites.map((elem, index) => {
                  //let text = "https://swapi.dev/api/people/1/";
                  //let id = text.match(/\/\d+/)[0].replace('/', '');
                  //console.log(id);
                  return (
                    <li>
                      <a className="dropdown-item" href="#">
                        {elem.name}
                      </a>
                    </li>
                  );
                })}
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
