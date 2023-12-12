import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ImagewithText from "./Components/ImageText";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <ImagewithText />
    </div>
  );
}

export default App;
