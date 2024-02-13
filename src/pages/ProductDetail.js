import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import ProductOverallDetail from "../components/ProductOverallDetail";
import {
  fetchSearchData,
  fetchOfferData,
  fetchReviewOptions,
  fetchProductDetailsOptions,
} from "../utils/fetchData";
import Detail from "../components/Detail";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      const productDetailData = await fetchProductDetailsOptions(id);
      setProductDetail(productDetailData.data);
    };
    fetchProductData();
  }, [id]);

  return (
    <Box>
      {productDetail.product && <ProductOverallDetail productDetail={productDetail.product} />}
      {productDetail.product && <Detail productDetail={productDetail.product} />}
    </Box>
  );
};

export default ProductDetail;
