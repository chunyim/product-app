import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchProducts from "../components/SearchProducts";
import Products from "../components/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [defaultSearchResult, setDefaultSearchResult] = useState([
    "jeans",
    "shoes",
    "watches",
    "sweaters",
    "bags",
    "backpacks",
    "dolls",
  ]);

  return (
    <Box>
      <HeroBanner setProducts={setProducts}/>
      <SearchProducts
        defaultSearchResult={defaultSearchResult}
        setProducts={setProducts}
      />
      <Products products={products} setProducts={setProducts} />
    </Box>
  );
};

export default Home;
