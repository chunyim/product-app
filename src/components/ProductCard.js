import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Link className="product-card" to={`/product/${product.product_id}`}>
      <Stack
        direction="row"
        sx={{
          position: "relative",
          width: "auto",
          height: "auto",
          justifyContent: "center",
        }}
      >
        <img
          src={product.product_photos[0]}
          alt={product.product_title}
          loading="lazy"
        />
      </Stack>
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#FFF",
            background: "green",
            fontSize: "12px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {product.product_title}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "darkgreen",
            background: "lightgreen",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {product.offer.price}
        </Button>
      </Stack>
    </Link>
  );
};

export default ProductCard;
