import React, { useState } from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Particles from "react-tsparticles";

const options = {
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

	const onButtonPress = (event) => {
		console.log("Click");

		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Key 59a739a807b0417990b5bb0987b3ac04");
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
		"inputs": [
			{
			"data": {
				"image": {
				"url": "https://samples.clarifai.com/metro-north.jpg"
				}
			}
			}
		]
		});

		var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
		};

		fetch("https://api.clarifai.com/v2/models/a403429f2ddf4b49b307e318f00e528b/outputs", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	}

	return (
		<>
			<Particles className="particles" canvasClassName="particles-canvas" params={options} />
			<div className="App">
				<Navigation />
				<Rank />
				<ImageLinkForm inputChangeHandler={linkInputChangeHandler} onButtonPress={onButtonPress} link={link} />
				{/* <FaceDetection /> */}
			</div>
		</>
	);
}

export default App;