import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [people,setPeople]=useState(null)

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
	  const testPeople =()=>{
		console.log(store.people.results)
	  }
	  const testPlanets =()=>{
		console.log(store.planets.results)
	  }
	  const testVehicles =()=>{
		console.log(store.vehicles.results)
	  }

return(<>
<div className="row row-cols-3 mt-2  g-4">
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div><div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div><div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  
  
</div>



<button onClick={testPeople}>test people</button>
<button onClick={testPlanets}>test planets</button>
<button onClick={testVehicles}>test vehicles</button>
</>
)
	
};
