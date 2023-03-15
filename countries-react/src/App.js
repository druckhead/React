import "./App.css";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import CountriesPage from "./Countries/CountriesPage";
import CountryDetails from "./Countries/CountryDetails";
import CountdownPage from "./Countdown/CountdownPage";
import { useState } from "react";

function App() {
  const [secondsInput, setSecondsInput] = useState("");
  const [countdownStarted, setCountdownStarted] = useState(false);
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
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
