import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <AppBar position="sticky" sx={{ top: 0 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            fontSize: 1.6 + "em",
          }}
        >
          Cocktails
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
