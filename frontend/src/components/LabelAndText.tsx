import React from "react";

import { Grid, Typography } from "@mui/material";

const LabelAndText = ({ label, text }: { label: string; text: string }) => {
  return (
    <Grid item container>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          {label}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default LabelAndText;
