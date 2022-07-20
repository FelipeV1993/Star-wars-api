import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/STAR_WARS_LOGO.webp";
import { Context } from "../store/appContext";



export const Navbar = () => {
 
  const { store, actions } = useContext(Context);
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
              <Link
                className="nav-link text-light active "
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light active "
                aria-current="page"
                to="/people"
              >
                people
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light active "
                aria-current="page"
                to="/vehicles"
              >
                vehicles
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light active "
                aria-current="page"
                to="/planets"
              >
                Planets
              </Link>
            </li>
            
          </ul>
          <div className="dropdown ">
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites({store.favorites.length>0?store.favorites.length:<i class="fas fa-heart"></i>})
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1" >
              {!!store.favorites &&
                store.favorites.map((elem, index) => {
                  //let text = "https://swapi.dev/api/people/1/";
                  //let id = text.match(/\/\d+/)[0].replace('/', '');
                  //console.log(id);
                  return (
                    <li key={index}>
                      <a className="dropdown-item" href="#">
                        {index}{elem.name}<i class="fas fa-trash" onClick={() => {
              actions.deletedFavorite(elem.name)
            }}></i>
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
