import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import Anakin from "../../img/Hayden-Christensen-regresa-como-Anakin-Skywalker-para-la-serie-live-action-de-Ahsoka-Tano.webp";
import Starts from "../../img/stars2.jpg";
import Planets from "../../img/planets.jpeg";
import Vehicles from "../../img/vehicles.jpg";
import { Link } from "react-router-dom";
export const Home = () => {
  const { store, actions } = useContext(Context);
  const [people, setPeople] = useState(null);

  // const getPeople = () => {
  // 	fetch('https://swapi.dev/api/people/', {
  // 		method: 'GET',
  // 		headers: {
  // 			'Content-Type': 'application/json',
  // 		}
  // 	})
  // 	.then((response) => {
  // 	console.log(response);
  // 	return response.json();
  // 	})
  // 	.then((data) => {
  // 	setPeople(data);

  // 	})
  // 	.catch((error) => {
  // 	console.log(error);
  // 	});
  // };
  // useEffect(() => {
  // 	getPeople();
  //   }, []);
  const testPeople = () => {
    console.log(store.people.results);
  };
  const testPlanets = () => {
    console.log(store.planets.results);
  };
  const testVehicles = () => {
    console.log(store.vehicles.results);
  };

  return (
    <>
      <div className="row row-cols-3 mt-2  p-5" style={{width:"100%"}}>
        <div className="col">
          <div className="card" style={{ backgroundImage: `url(${Starts})` }}>
            <img
              src={Planets}
              className="card-img-top"
              alt="..."
              style={{ height: "300px" }}
            />
            <div className="card-body text-warning text-center">
              <h5 className="card-title">Planets</h5>
              <p className="card-text">
                complet list of planets from star wars, from api
              </p>
              <Link to="/planets">
                <button type="button" class="btn btn-warning">
                  Go Whit The Force!
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ backgroundImage: `url(${Starts})` }}>
            <img
              src={Anakin}
              className="card-img-top"
              alt="..."
              style={{ height: "300px" }}
            />
            <div className="card-body text-warning text-center">
              <h5 className="card-title">People</h5>
              <p className="card-text">
                complet list of people from star wars, from api
              </p>
              <Link to="/people">
                <button type="button" class="btn btn-warning">
                  Go Whit The Force!
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ backgroundImage: `url(${Starts})` }}>
            <img
              src={Vehicles}
              className="card-img-top"
              alt="..."
              style={{ height: "300px" }}
            />
            <div className="card-body text-warning text-center">
              <h5 className="card-title">Vehicles</h5>
              <p className="card-text">
                complet list of vehicles from star wars, from api
              </p>
              <Link to="/vehicles">
                <button type="button" class="btn btn-warning">
                  Go Whit The Force!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <button onClick={testPeople}>test people</button>
<button onClick={testPlanets}>test planets</button>
<button onClick={testVehicles}>test vehicles</button> */}
    </>
  );
};
