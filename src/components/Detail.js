import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";

const Detail = ({ productDetail }) => {
  const {
    product_photos,
  } = productDetail;
  
  return (
    <Stack>
      <HorizontalScrollBar data={product_photos} />
    </Stack>
  );
};

export default Detail;
