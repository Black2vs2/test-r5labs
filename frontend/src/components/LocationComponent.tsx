import React from "react";

import { Card, CardContent, Grid, Typography } from "@mui/material";

import { ApiLocation } from "../@types/types";

const LocationComponent = ({ locations }: { locations: ApiLocation[] }) => {
  return (
    <Grid container rowSpacing={2}>
      {locations.map(
        ({ locationId, locationDetails, address, locationType }) => (
          <Grid item xs={12} key={locationId}>
            <Card variant="outlined">
              <Grid container>
                <Grid item container xs={6}>
                  <Grid item xs={12}>
                    Location Details: {locationDetails}
                  </Grid>
                  <Grid item xs={12}>
                    Location Type: {locationType}
                  </Grid>
                </Grid>
                <Grid item container xs={6} rowSpacing={1}>
                  {Object.keys(address).map((addressObjectKey) => {
                    const currentElement = address[addressObjectKey];
                    if (!currentElement) return;
                    return (
                      <Grid item container key={addressObjectKey}>
                        <Grid item xs={12}>
                          <Typography variant="subtitle2">
                            {addressObjectKey}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="body2">
                            {currentElement}
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default LocationComponent;
