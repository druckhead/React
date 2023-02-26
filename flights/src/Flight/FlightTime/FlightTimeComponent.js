import "./FlightTimeComponent.css";

function ExtraDays({ extraDays }) {
  if (extraDays) {
    return <span className="bolded">(+{extraDays})</span>;
  }
  return null;
}

export default function FlightTime({ date, extraDays = null }) {
  const options = {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  };
  const dateString = date.toLocaleDateString("en-US", options);

  return (
    <div className='txt-lg'>
      {dateString} <ExtraDays extraDays={extraDays} />
    </div>
  );
}
