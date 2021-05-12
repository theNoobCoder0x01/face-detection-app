import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

function App() {
	return (
		<div className="App">
			<Navigation />
			{/* <div className="sized-box"></div> */}
			<Rank />
			<ImageLinkForm />
			{/* <FaceDetection /> */}
		</div>
	);
}

export default App;