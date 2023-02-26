import './FlightCard.css'
import Flight from "../Flight/FlightComponent";

export default function FlightCard({ flight }) {
  return (
    <div className='flightCard'>
      <Flight flight={flight} />
    </div>
  );
}
