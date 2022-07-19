import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Background from "../img/fondo.jpeg"
import Starts from "../img/stars.jpg"
import { People } from "./views/people";
import { Plamets } from "./views/planets";
import { Vehicle, Vehicles } from "./views/vehicles";
// const fondoDark ={
// 	backgroundImage: url({Fondo})
// }

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div style={{ 
			backgroundImage: `url(${Background})`,

			minHeight:"100%",
			minWidth:"100%",
		 }}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route exact path="/vehicles">
							<Vehicle/>
						</Route>
						<Route exact path="/planets">
							<Plamets />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
