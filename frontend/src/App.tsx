import React, { useEffect, useState } from "react";

import { Card, Typography } from "@mui/material";

import { ApiLocation } from "./@types/types";

import { getLocations } from "./services/api";

import { LocationComponent } from "./components";

import "./App.css";

const App = () => {
  const [locations, setLocations] = useState<ApiLocation[]>([]);

  useEffect(() => {
    const getData = () => getLocations(0, 10);
    getData().then((data) => setLocations(data.locations));
  }, []);

  return (
    <div className="App" style={{ margin: "0px 20px 0px 20px" }}>
      <Typography variant="h2">Locations List</Typography>
      <LocationComponent locations={locations} />
    </div>
  );
};

export default App;
