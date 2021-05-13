import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Particles from "react-tsparticles";
import { useState } from 'react';
import { ClarifaiStub, grpc } from 'clarifai-nodejs-grpc';

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

const stub = ClarifaiStub.grpc();

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key 59a739a807b0417990b5bb0987b3ac04");

function App() {
	const [link, setLink] = useState("");

	const linkInputChangeHandler = (event) => {
		const text = event.target.value;
		setLink(text);
	}

	const onButtonPress = (event) => {
		stub.PostModelOutputs(
			{
				// This is the model ID of a publicly available General model. You may use any other public or custom model ID.
				model_id: "aaa03c23b3724a16a56b629203edc62c",
				inputs: [{data: {image: {url: "https://samples.clarifai.com/dog2.jpeg"}}}]
			},
			metadata,
			(err, response) => {
				if (err) {
					console.log("Error: " + err);
					return;
				}
		
				if (response.status.code !== 10000) {
					console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
					return;
				}
		
				console.log("Predicted concepts, with confidence values:")
				for (const c of response.outputs[0].data.concepts) {
					console.log(c.name + ": " + c.value);
				}
			}
		);
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