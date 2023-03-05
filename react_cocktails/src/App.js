import { Box } from "@mui/system";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import ButtonAppBar from "./components/MainPage/Navbar";

function App() {
  return (
    <Box
      sx={{
        height: 100 + "vh",
        display: "flex",
        flexDirection: "column",
        gap: 1 + "em",
      }}
    >
      <ButtonAppBar />
      <MainPage />
    </Box>
  );
}

export default App;
