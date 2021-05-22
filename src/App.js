import React, { useState } from 'react';
import Particles from "react-tsparticles";
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

import './App.css';

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
			}, value: 6,
		},
		opacity: { value: 0.4, },
		shape: { type: ["circle", "triangle", "square"], },
		size: { random: true, value: 2.5, },
	},
}

function App() {
	return (
		<>
			<Particles className="particles" canvasClassName="particles-canvas" params={options} />
			<div className="App">
				<Navigation />
				<Rank />
				<ImageLinkForm />
			</div>
		</>
	);
}

export default App;