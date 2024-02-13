import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import ProductCard from "./ProductCard";
import { fetchSearchData } from "../utils/fetchData";

const Products = ({ products, setProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchProductData = async () => {
      let productData = [];

      const res = await fetchSearchData("bags");
      productData = res.data;
      setProducts(productData);
    };
    fetchProductData();
  }, []);

  return (
    <Box
      id="products"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Search Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {products.length > productsPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(products.length / productsPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          ></Pagination>
        )}
      </Stack>
    </Box>
  );
};

export default Products;
