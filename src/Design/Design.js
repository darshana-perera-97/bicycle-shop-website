import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./design.css";
import TopLeft from "./TopItems/TopLeft";
import TopRight from "./TopItems/TopRight";
import Navbar from "./Common/Navbar";
import MountainBi from "./MountainBicycles/MountainBi";
import BicycleImg from "./MountainBicycles/BicycleImg";
import BicycleDis from "./MountainBicycles/BicycleDis";
import BycycleCarasole from "./BycycleCarasole/BycycleCarasole";
import BicycleCarasoleHeading from "./BycycleCarasole/BicycleCarasoleHeading";
import MountainRangeImg from "./mountainRangeImage/MountainRangeImg";
import Map from "./About/Map";
import AboutUs from "./About/AboutUs";
import SocialMedia from "./Common/SocialMedia";

export default function Design() {
  return (
    <div className="carasoleBack">
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={6} sm={7}>
            <TopLeft />
          </Grid>
          <Grid item xs={8} md={6} sm={5}>
            <TopRight />
          </Grid>
        </Grid>
      </Box>
      <MountainBi />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={6} sm={7}>
            <BicycleImg />
          </Grid>
          <Grid item xs={8} md={6} sm={5}>
            <BicycleDis />
          </Grid>
        </Grid>
      </Box>
      <BicycleCarasoleHeading />
      <BycycleCarasole />
      <MountainRangeImg />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={6} sm={7}>
            <Map />
          </Grid>
          <Grid item xs={8} md={6} sm={5}>
            <AboutUs />
          </Grid>
        </Grid>
      </Box>
      <SocialMedia />
    </div>
  );
}
