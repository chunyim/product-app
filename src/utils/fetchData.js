import axios from "axios";

const fetchApiData = async (url, params) => {
  const options = {
    method: "GET",
    url,
    params: {
      country: "us",
      language: "en",
      ...params,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSearchData = async (searchQuery) => {
  const url = "https://real-time-product-search.p.rapidapi.com/search";
  const params = { q: searchQuery };

  return fetchApiData(url, params);
};

export const fetchOfferData = async (productId) => {
  const url = "https://real-time-product-search.p.rapidapi.com/product-offers";
  const params = { product_id: productId };

  return fetchApiData(url, params);
};

export const fetchReviewOptions = async (productId) => {
  const url = "https://real-time-product-search.p.rapidapi.com/product-reviews";
  const params = { product_id: productId };

  return fetchApiData(url, params);
};

export const fetchProductDetailsOptions = async (productId) => {
  const url = "https://real-time-product-search.p.rapidapi.com/product-details";
  const params = { product_id: productId };

  return fetchApiData(url, params);
};
