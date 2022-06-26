import React from "react";

import { Grid, Typography } from "@mui/material";

import { LocationComponent } from "./components";

const App = () => {
  return (
    // marginBottom to make it scrollable (could make cards longer)
    <Grid container rowSpacing={5} sx={{ marginY: 0, marginBottom: "100px" }}>
      <Grid item container xs={12} justifyContent="center">
        <Typography variant="h2" sx={{ fontWeight: 400 }}>
          Locations List
        </Typography>
      </Grid>
      <Grid item container xs={12} justifyContent="center">
        <LocationComponent maxElementsPerFetch={3} />
      </Grid>
    </Grid>
  );
};

export default App;
