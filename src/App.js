import "./App.css";
import Geolocation from "./Geolocation";
import Header from "./Header";

function App() {
  return <div className="App">
    <h1>
      <Header/>
      <Geolocation/>
    </h1>
  </div>;
}

export default App;
