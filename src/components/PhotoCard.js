import React, { useState } from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";

const PhotoCard = ({ photo }) => {
  return (
      <Box
        type="button"
        alignItems="center"
        justifyContent="center"
        className="defaultSearch-card"
        sx={{
          // borderBottomLeftRadius: "50px",
          width: "250px",
          height: "280px",
          cursor: "pointer",
          gap: "40px",
          p: "15px",
        }}
      >
        <img
          src={photo}
          alt="photo"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </Box>
  );
};

export default PhotoCard;
