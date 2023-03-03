import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
    </Box>
  );
}
