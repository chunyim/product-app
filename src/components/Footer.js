import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "18px", xs: "10px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made by Henry Yim @2024
    </Typography>
  );
};

export default Footer;
