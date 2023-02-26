import "./App.css";
import FlightCard from "./FlightCard/FlightCard";
import { FLIGHTS_DATA } from "./flight_data";

function App() {
  const flights = FLIGHTS_DATA.map((flight) => (
    <FlightCard key={flight.flight_num} flight={flight} />
  ));

  // return <div>{flights}</div>;
  return <div>
    {flights}
  </div>
}

export default App;
