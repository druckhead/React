import { Box } from "@mui/system";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import ButtonAppBar from "./MainPage/Navbar";

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
