import "./App.css";
import MainPage from "./MainPage/MainPage";
import ButtonAppBar from './MainPage/Navbar'

function App() {
  return (
    <div className="App" style={{ height: 100 + "vh" }}>
      <ButtonAppBar />
      <MainPage />
    </div>
  );
}

export default App;
