import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
const nowDate = new Date();

// 社会人歴
const nowYear = nowDate.getFullYear();

const Footer = () => {
  return (
    <Grid container justifyContent="center" p={4}>
      <Grid item xs={12}>
        <Typography>{nowYear} @syoimin </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
