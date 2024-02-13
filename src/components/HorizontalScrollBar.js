import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContent } from "react-horizontal-scrolling-menu";

import DefaultCard from "./DefaultCard";
import PhotoCard from "./PhotoCard";

const HorizontalScrollBar = ({
  data,
  handleSearch,
  setSearch,
  setProducts,
  defaultSearchResult,
}) => {
  return (
    <ScrollMenu>
      {data.map((product) => (
        <Box
          key={product.id || product}
          productid={product.id || product}
          title={product.id || product}
          m="0 40px"
        >
          {defaultSearchResult ? (
            <DefaultCard
              setProducts={setProducts}
              data={product}
              handleSearch={handleSearch}
              setSearch={setSearch}
            />
          ) : (
            <PhotoCard photo={product} sx={{ width: "20px" }} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
