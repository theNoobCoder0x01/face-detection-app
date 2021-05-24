import React, { useState } from 'react';
import Particles from "react-tsparticles";
import Navigation from "./components/Navigation/Navigation";
import SignIn from './components/SignIn/SignIn';
import MainPage from './components/MainPage/MainPage';

import './App.css';
import SignOut from './components/SignOut/SignOut';
import Register from './components/Register/Register';
import ErrorPage from './ErrorPage';


const options = {
	fpsLimit: 60,
	interactivity: {
		detectsOn: "canvas",
		modes: { push: { quantity: 4, }, },
	},
	particles: {
		color: { value: "#FFFFFF", /*732BD3*/ },
		links: {
			color: "#FFB6F6",
			distance: 200,
			enable: true,
			opacity: 0.6,
			width: 0.7,
		},
		collisions: { enable: true, },
		move: {
			direction: "top",
			enable: true,
			// outMode: "bounce",
			speed: 5,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				value_area: 100,
			}, value: 5,
		},
		opacity: { value: 0.5, },
		shape: { type: ["circle", "triangle", "square"], },
		size: { random: true, value: 3, },
	},
}

const App = () => {
	const [route, setRoute] = useState("signin");

	const router = (r) => {
		switch(route) {
			case "signin":
				return (<SignIn setRoute={setRoute} />);
			case "signout":
				return (<SignOut setRoute={setRoute} />);
			case "register":
				return (<Register setRoute={setRoute} />);
			case "mainpage":
				return (<MainPage />);
			default:
				return (<ErrorPage setRoute={setRoute}/>);
		}
	}

	return (
		<>
			<Particles className="particles"
				canvasClassName="particles-canvas"
				params={options}
			/>
			<div className="App">
				<Navigation route={route} setRoute={setRoute} />
				{ router(route) }
			</div>
		</>
	);
}

export default App;
