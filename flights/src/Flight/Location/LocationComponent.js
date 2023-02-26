import "./LocationComponent.css";
import FlightTime from "../FlightTime/FlightTimeComponent";

function CityCountry({ city, country }) {
  return (
    <div className='txt-lg'>
      {city}, {country}
    </div>
  );
}

function CityImage({ url }) {
  return (
    <img
      className="img-scale img-aspect img-rounded img-shadow"
      src={url}
      alt="Golden Gate Bridge and San Francisco Skyline"
    />
  );
}

export default function Location({ location, extraDays=null }) {
  return (
    <div className="locationContainer">
      <CityCountry city={location.city} country={location.country} />
      <CityImage url={location.img_url} />
      <FlightTime date={location.time} extraDays={extraDays} />
    </div>
  );
}
