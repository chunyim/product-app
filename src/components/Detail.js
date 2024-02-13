import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";

const Detail = ({ productDetail }) => {
  const {
    product_photos,
  } = productDetail;
  console.log(product_photos)
  //   console.log(productDetail);
  //   console.log(product_description);
  //   console.log(offer);
  //   console.log(product_photos);
  //   console.log(product_title);
  return (
    <Stack>
      <HorizontalScrollBar data={product_photos} />
    </Stack>
  );
};

export default Detail;
