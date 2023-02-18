import "./App.css";
import Geolocation from "./Geolocation";
import Header from "./Header";
import Map from "./Map";

function App() {
  return (
    <div className="App">
      <h1>
        <Header />
        <Geolocation />
        <Map />
      </h1>
    </div>
  );
}

export default App;
