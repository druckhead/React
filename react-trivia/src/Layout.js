import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, Outlet } from "react-router-dom";
import { GameProvider } from "./TriviaContext";
import { SettingsProvider } from "./SettingsContext";

function Layout() {
  return (
    <Box>
      <ResponsiveAppBar />
      <SettingsProvider>
        <GameProvider>
          <Outlet />
        </GameProvider>
      </SettingsProvider>
    </Box>
  );
}

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: "flex", flexGrow: 1, gap: 5 }}>
            <Link to="game">GAME</Link>
            <Link to="settings">SETTINGS</Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Layout;
