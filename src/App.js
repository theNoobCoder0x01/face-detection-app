import './App.css';
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Rank /> */}
      <ImageLinkForm />
      {/* <FaceDetection /> */}
    </div>
  );
}

export default App;