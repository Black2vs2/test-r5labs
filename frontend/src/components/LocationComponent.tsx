import React, { useEffect, useState } from "react";

import { Card, CircularProgress, Divider, Grid } from "@mui/material";

import { ApiLocation } from "../@types/types";

import { LabelAndText } from "./index";
import { getLocations } from "../services/api";
import { useInfiniteScroll } from "../hooks/";

const LocationComponent = ({
  maxElementsPerFetch,
}: {
  maxElementsPerFetch: number;
}) => {
  const [locations, setLocations] = useState<ApiLocation[]>([]);

  const addMoreLocations = async () => {
    const newLocations = await (
      await getLocations(locations.length, maxElementsPerFetch)
    ).locations;
    setLocations((prevLocations) => [...prevLocations, ...newLocations]);
    setIsFetchingData(false);
  };

  const [isFetchingData, setIsFetchingData] =
    useInfiniteScroll(addMoreLocations);

  useEffect(() => {
    //Add initial locations
    addMoreLocations();
  }, []);

  return (
    <Grid container rowSpacing={2} justifyContent="center">
      {locations.map(
        ({ locationId, locationDetails, address, locationType }) => (
          <Grid item xs={7} key={locationId}>
            <Card variant="outlined">
              <Grid container margin="12px">
                <Grid item container xs={5}>
                  <LabelAndText
                    label={"Location Details"}
                    text={locationDetails}
                  />
                  <LabelAndText label={"Location Type"} text={locationType} />
                </Grid>
                <Grid item xs={2} justifyContent="center" display="grid">
                  <Divider orientation="vertical" variant="middle" />
                </Grid>
                <Grid item container xs={5} rowSpacing={1}>
                  {Object.keys(address).map((addressObjectKey) => {
                    const currentElement = address[addressObjectKey];
                    if (!currentElement) return;
                    return (
                      <LabelAndText
                        label={addressObjectKey}
                        text={currentElement}
                        key={addressObjectKey}
                      />
                    );
                  })}
                </Grid>
              </Grid>
            </Card>
          </Grid>
        )
      )}
      <Grid item xs={12}>
        {isFetchingData && <CircularProgress />}
      </Grid>
    </Grid>
  );
};

export default LocationComponent;
