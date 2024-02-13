import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/woman.jpg";
import { fetchSearchData } from "../utils/fetchData";

const HeroBanner = ({ setProducts }) => {
  const handleSearch = async () => {
    const res = await fetchSearchData("trending");
    const searchResult = res.data;
    setProducts(searchResult);
    window.scrollTo({ top: 1700, left: 100, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sn: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="Green" fontWeight="600" fontSize="26px">
        For Online Shopping Addicts
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Click, Shop, Smile <br />
        and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the trending products
      </Typography>
      <Button
        variant="contained"
        color="success"
        href="#product"
        sx={{
          padding: "10px",
        }}
        onClick={handleSearch}
      >
        Explore Trending Items
      </Button>
      <Typography
        fontWeight={600}
        color="Green"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="50px"
      >
        Work Hard Shop Hard
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
