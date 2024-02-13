import React, { useState } from "react";
import { Button, Box, Stack, Typography } from "@mui/material";

import Loader from "./Loader.js";

const ProductOverallDetail = ({ productDetail }) => {
  const { offer, product_title, product_description } = productDetail;
  // console.log(offer);
  // console.log(productDetail);

  const [showDescription, setShowDescription] = useState(true);

  const handleShowDescription = () => {
    setShowDescription(true);
  };

  const handleShowBuyingOptions = () => {
    setShowDescription(false);
  };

  return (
    <Box>
      {productDetail ? (
        <>
          <Stack
            direction="column"
            sx={{
              position: "relative",
              width: "auto",
              height: "auto",
              justifyContent: "center",
              ml: "70px",
              mr: "50px",
              mt: "50px",
              mb: "10px",
              p: "50px",
            }}
          >
            <Typography
              fontWeight={700}
              sx={{ fontSize: { lg: "44px", xs: "40px" } }}
              mb="15px"
            >
              {offer.store_name}
            </Typography>
            <Typography
              fontWeight={300}
              color="Green"
              sx={{
                display: { lg: "block", xs: "25px" },
              }}
              fontSize="25px"
            >
              {product_title}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              justifyContent: "center",
              mb: "30px",
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{
                ml: "21px",
                padding: "10px",
              }}
              onClick={handleShowDescription}
            >
              Product Description
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{
                ml: "21px",
                padding: "10px",
              }}
              onClick={handleShowBuyingOptions}
            >
              Buying Options
            </Button>
          </Stack>
          <Typography
            sx={{
              textAlign: "justify",
              ml: "70px",
              mr: "70px",
              mb: "10px",
              p: "50px",
            }}
          >
            {showDescription ? (
              product_description
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                  p: "5px",
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Price: {offer.price}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Tax: {offer.tax}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Shipping: {offer.shipping}
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  href={offer.offer_page_url}
                  target="_blank"
                >
                  Visit Site
                </Button>
              </Typography>
            )}
          </Typography>
        </>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default ProductOverallDetail;
