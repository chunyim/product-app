import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/shopping-cart.png";

import { fetchSearchData } from "../utils/fetchData";

const DefaultCard = ({ data, setProducts }) => {
  const [defaultData, setDefaultData] = useState([]);

  const handleClick = async () => {
    const res = await fetchSearchData(data);
    const searchResult = res.data;
    setProducts(searchResult);
    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
  };

  return (
    <>
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="defaultSearch-card"
        sx={{
          borderBottomLeftRadius: "20px",
          width: "270px",
          height: "280px",
          cursor: "pointer",
          gap: "47px",
        }}
        onClick={handleClick}
      >
        <img
          src={Icon}
          alt="cart"
          style={{
            width: "40px",
            height: "40px",
          }}
        />
        <Typography
          fontSize="24px"
          fontWeight="bold"
          color="#3A1212"
          textTransform="capitalize"
        >
          {data}
          {""}
        </Typography>
      </Stack>
    </>
  );
};

export default DefaultCard;
