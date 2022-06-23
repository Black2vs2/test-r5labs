import React from "react";

import { Typography } from "@mui/material";

import { LocationComponent } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ margin: "0px 20px 20px 20px" }}>
      <Typography variant="h2">Locations List</Typography>
      <LocationComponent maxElementsPerFetch={3} />
    </div>
  );
};

export default App;
