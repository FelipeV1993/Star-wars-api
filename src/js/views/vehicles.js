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

export const Vehicle = () => {
  const { store, actions } = useContext(Context);
  
  
  function test() {
    console.log(store.vehicles);
  }

  return (
    <>
    {/* <button onClick={test}>test</button> */}
      {/* <button onClick={test}>test</button> */}
      <div className="row row-cols-3 mt-2  p-5" style={{width:"100%"}}>
  
          {!!store.vehicles && store.vehicles.results.map((elem, index) => {
              //let text = "https://swapi.dev/api/vehicles/1/";
              //let id = text.match(/\/\d+/)[0].replace('/', '');
              //console.log(id);
              return (
              <div className="col" >
              <div className="card" style={{ backgroundImage: `url(${Starts})` }}>
                <img src={Defecto} className="card-img-top" alt="..." style={{ height: "300px" }} />
                <div className="card-body text-warning text-center">
                  <h5 className="card-title">{elem.name}</h5>
                  <p className="card-text">
                  model: {elem.model}<br/> manufacturer: {elem.manufacturer}<br/>cost_in_credits: {elem.cost_in_credits}
                  </p>
                  <button type="button" class="btn btn-warning" onClick={() => {
              actions.addFavorites(elem.name)
            }}>Go Whit The Force!&nbsp; <i class="fas fa-heart"></i></button>
                </div>
              </div>
             
            </div>)
            })}

      </div>
    </>
  );
};