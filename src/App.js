import "./App.css";
import CountryInfo from "./CountryInfo";
import Geolocation from "./Geolocation";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <h1>
        <Header />
        <Geolocation />
        <CountryInfo />
      </h1>
    </div>
  );
}

export default App;
