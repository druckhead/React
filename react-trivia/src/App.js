import "./App.css";
import Game from "./Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameSettings from "./GameSettings";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="game" element={<Game />} />
          <Route path="settings" element={<GameSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
