import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Jokes from "./components/Jokes/Jokes";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="jokes/" element={<Jokes />} />
        <Route path="countries/" element={<Countries />}>
          <Route path=":country_name/" element={<CountryDetails />} />
        </Route>
        <Route path="about/" element={<About />} />
        <Route path="*/" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
