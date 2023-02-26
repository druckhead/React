import './FlightComponent.css'

import Seats from "./Seats/SeatsComponent";
import Location from "./Location/LocationComponent";

function Title({ flight_num }) {
  return <h1 className='flightTitle'>Flight {flight_num}</h1>;
}

function ArrowSVG() {
  return (
      <div className='arrow-scale'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </div>
  )
}

function FlightPath({ location }) {
  // calculate date delta in days
  function getDateDelta(location) {
    const origin = location.origin.time.getDate()
    const destination = location.destination.time.getDate()
    return Math.floor((destination - origin));
  }

  return (
    <div className="flightPathContainer">
      <Location location={location.origin} />
      <ArrowSVG/>
      <Location location={location.destination} extraDays={getDateDelta(location)} />
    </div>
  );
}

export default function Flight({ flight }) {
  return (
    <div className="flightContainer">
      <Title flight_num={flight.flight_num} />
      <FlightPath location={flight} />
      <Seats seatsLeft={flight.seats_left} />
    </div>
  );
}
