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
    <Grid
      container
      rowSpacing={5}
      maxWidth="700px"
      justifyContent="center"
      display="grid"
      textAlign="center"
    >
      {locations.map(
        ({ locationId, locationDetails, address, locationType }) => (
          <Grid item xs={12} key={locationId}>
            <Card variant="outlined">
              <Grid container sx={{ m: 3 }} rowSpacing={3}>
                <Grid item container xs={11} rowSpacing={2}>
                  <Grid item xs={6}>
                    <LabelAndText
                      label={"Location Details"}
                      text={locationDetails}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <LabelAndText label={"Location Type"} text={locationType} />
                  </Grid>
                </Grid>
                <Grid item xs={11}>
                  <Divider orientation="horizontal" variant="fullWidth" />
                </Grid>
                <Grid item container xs={11} rowSpacing={3}>
                  {Object.keys(address).map((addressObjectKey) => {
                    const currentElement = address[addressObjectKey];
                    if (!currentElement) return;
                    return (
                      <Grid item xs={6} key={addressObjectKey}>
                        <LabelAndText
                          label={addressObjectKey}
                          text={currentElement}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Card>
          </Grid>
        )
      )}
      <Grid item container justifyContent="center" sx={{ m: 1 }}>
        {isFetchingData && <CircularProgress />}
      </Grid>
    </Grid>
  );
};

export default LocationComponent;
