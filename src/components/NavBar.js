import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid black",
          }}
        >
          Home
        </Link>
        {/* <a
          href="#product"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Products
        </a> */}
      </Stack>
    </Stack>
  );
};

export default NavBar;
