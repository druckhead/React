import "./App.css";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import CountriesPage from "./Countries/CountriesPage";
import CountryDetails from "./Countries/CountryDetails";
import CountdownPage from "./Countdown/CountdownPage";
import { useEffect, useState } from "react";

function App() {
  const [secondsInput, setSecondsInput] = useState("");
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    console.log("calling useEffect", timeLeft);
    if (timeLeft === 0) {
      setCountdownStarted(false);
      return;
    }
    const timerId = setTimeout(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    // we have to provide clean-up function to stop interval/timer!
    return () => {
      console.log("calling clearTimeout for timerId", timerId);
      clearTimeout(timerId);
    };
  }, [timeLeft]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="countries/" element={<CountriesPage />}>
          <Route path=":countryId/" element={<CountryDetails />} />
        </Route>
        <Route
          path="countdown/"
          element={
            <CountdownPage
              secondsInput={secondsInput}
              setSecondsInput={setSecondsInput}
              countdownStarted={countdownStarted}
              setCountdownStarted={setCountdownStarted}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
