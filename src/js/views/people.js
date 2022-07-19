import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import Anakin from "../../img/Hayden-Christensen-regresa-como-Anakin-Skywalker-para-la-serie-live-action-de-Ahsoka-Tano.webp";
import Starts from "../../img/stars2.jpg";
import Planets from "../../img/planets.jpeg";
import Vehicles from "../../img/vehicles.jpg";
import Defecto from "../../img/defecto.jpg"
import { Link } from "react-router-dom";
export const People = () => {
  const { store } = useContext(Context);
  
  
  function test() {
    console.log(store.people.results);
  }

  return (
    <>
      <button onClick={test}>test</button>
      <div className="row row-cols-3 mt-2  p-5">
  
          {!!store.people && store.people.results.map((elem, index) => {
              //let text = "https://swapi.dev/api/people/1/";
              //let id = text.match(/\/\d+/)[0].replace('/', '');
              //console.log(id);
              return (
              <div className="col" >
              <div className="card" style={{ backgroundImage: `url(${Starts})` }}>
                <img src={Defecto} className="card-img-top" alt="..." style={{ height: "300px" }} />
                <div className="card-body text-warning text-center">
                  <h5 className="card-title">{elem.name}</h5>
                  <p className="card-text">
                    height: {elem.height}cm<br/> mass: {elem.mass}kg<br/>hair color: {elem.hair_color}
                  </p>
                  <Link to="/planets">
                  <button type="button" class="btn btn-warning">Go Whit The Force!</button>
                  </Link>
                </div>
              </div>
             
            </div>)
            })}

      </div>
    </>
  );
};
