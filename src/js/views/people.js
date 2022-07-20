import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import Anakin from "../../img/Hayden-Christensen-regresa-como-Anakin-Skywalker-para-la-serie-live-action-de-Ahsoka-Tano.webp";
import Starts from "../../img/stars2.jpg";
import Sorprise from "../../img/star-wars-darth-vader.gif";
import Vehicles from "../../img/vehicles.jpg";
import Defecto from "../../img/defecto.jpg"
import { Link } from "react-router-dom";
export const People = () => {
  const { store, actions}= useContext(Context);
  
  
  function test() {
    console.log(store.favorites.filter(favorites => favorites.name == 'Darth Vader'));
  }
  function test2 (){
    console.log(store.favorites)
  }
  return (
    <>
    <div>

    </div>
      {/* <button onClick={test}>test</button>
      <button onClick={test2}>test2</button> */}
      <div className="row row-cols-3 mt-2  p-5">
  
          {!!store.people && store.people.results.map((elem, index) => {
              //let text = "https://swapi.dev/api/people/1/";
              //let id = text.match(/\/\d+/)[0].replace('/', '');
              //console.log(id);
              return (
              <div className="col" >
              <div className="card" style={{ backgroundImage: `url(${(store.favorites.filter(favorites => favorites.name == 'Darth Vader').map((elem)=>{return elem.name}))=='Darth Vader'?Sorprise:Starts})` }}>
                <img src={(store.favorites.filter(favorites => favorites.name == 'Darth Vader').map((elem)=>{return elem.name}))=='Darth Vader'?Sorprise:Defecto} className="card-img-top" alt="..." style={{ height: "300px" }} />
                <div className="card-body text-warning text-center">
                  <h5 className="card-title">{elem.name}</h5>
                  <p className="card-text">
                    height: {elem.height}cm<br/> mass: {elem.mass}kg<br/>hair color: {elem.hair_color}
                  </p>

                  <button type="button" class="btn btn-warning" onClick={() => {
              actions.addFavorites(elem.name)
            }}>Go Whit The Force!</button>

                </div>
              </div>
             
            </div>)
            })}

      </div>
    </>
  );
};
