import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Particles from "react-tsparticles";
import { useState } from 'react';

const options={
	fpsLimit: 60,
	interactivity: {
		detectsOn: "canvas",
		modes: {
			push: {
				quantity: 4,
			},
		},
	},
	particles: {
		color: {
			value: "#FFFFFF", /*732BD3*/
		},
		links: {
			color: "#FFB6F6",
			distance: 200,
			enable: true,
			opacity: 0.6,
			width: 0.7,
		},
		collisions: {
			enable: true,
		},
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
			},
			value: 6,
		},
		opacity: {
			value: 0.4,
		},
		shape: {
			type: ["circle", "triangle", "square"],
		},
		size: {
			random: true,
			value: 2.5,
		},
	},
}

function App() {
	const [link, setLink] = useState("");

	const linkInputChangeHandler = (event) => {
		const text = event.target.value;
		setLink(text);
	}

	return (
		<>
			<Particles className="particles" canvasClassName="particles-canvas" params={options} />
			<div className="App">
				<Navigation />
				<Rank />
				<ImageLinkForm inputChangeHandler={linkInputChangeHandler} link={link} />
				{/* <FaceDetection /> */}
			</div>
		</>
	);
}

export default App;