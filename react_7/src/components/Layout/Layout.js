import React from "react";
import Box from "@mui/material/Box";
import DrawAppBar from "../DrawAppBar/DrawAppBar";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box>
      <DrawAppBar />
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
}
