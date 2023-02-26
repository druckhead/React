import "./SeatsComponent.css";
import airplaneSeatLogo from "./icons/airplaneSeat.png";

function SeatContainer({ seatsLeft }) {
  let classes = "fontWeight";

  if (seatsLeft !== 0) {
    if (seatsLeft >= 20) {
      classes += " green ";
    } else if (seatsLeft >= 8) {
      classes += " yellow ";
    } else {
      classes += " red ";
    }
  }

  return (
    <div className="seatContainer">
      <img className="planeSeat" src={airplaneSeatLogo} alt="Flight Seat" />
      <p className="txt-lg">
        Seats left:{" "}
        <span className={classes}>{seatsLeft ? seatsLeft : "Sold Out"}</span>
      </p>
    </div>
  );
}

export default function Seats({ seatsLeft }) {
  return <SeatContainer seatsLeft={seatsLeft} />;
}
