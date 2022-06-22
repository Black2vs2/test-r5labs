import React, { useEffect, useState } from "react";
import { getLocations } from "./services/api";

import "./App.css";
import { ApiLocation } from "./@types/types";

const App = () => {
  const [locations, setLocations] = useState<ApiLocation[]>([]);

  useEffect(() => {
    const getData = () => getLocations();
    getData().then((data) => setLocations(data.locations));
  }, []);

  return <div className="App"></div>;
};

export default App;
