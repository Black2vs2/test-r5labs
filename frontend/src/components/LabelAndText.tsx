import React from "react";

import { Grid, Typography } from "@mui/material";

const LabelAndText = ({ label, text }: { label: string; text: string }) => {
  return (
    <Grid item container>
      <Grid item xs={12}>
        <Typography variant="subtitle2">{label}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default LabelAndText;
