import React from "react";
import Box from "@mui/material/Box";
import DrawAppBar from "../DrawAppBar/DrawAppBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box>
      <DrawAppBar />
      <Outlet />
    </Box>
  );
}
