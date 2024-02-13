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
      "X-RapidAPI-Key": "4ce702574emshbd70b808c653f0ap10aceajsnb2fb2572261b",
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

// import axios from "axios";

// export const fetchSearchData = async (searchQuery) => {
//   const options = {
//     method: "GET",
//     url: "https://real-time-product-search.p.rapidapi.com/search",
//     params: {
//       q: searchQuery,
//       country: "us",
//       language: "en",
//     },
//     headers: {
//       "X-RapidAPI-Key": process.env.RAPID_API_KEY,
//       "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchOfferData = async (productId) => {
//   const options = {
//     method: "GET",
//     url: "https://real-time-product-search.p.rapidapi.com/product-offers",
//     params: {
//       product_id: productId, // productId as the params
//       country: "us",
//       language: "en",
//     },
//     headers: {
//       "X-RapidAPI-Key": process.env.RAPID_API_KEY,
//       "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchReviewOptions = async (productId) => {
//   const options = {
//     method: "GET",
//     url: "https://real-time-product-search.p.rapidapi.com/product-reviews",
//     params: {
//       product_id: productId, // productId as the params
//       country: "us",
//       language: "en",
//     },
//     headers: {
//       "X-RapidAPI-Key": "fc179a2c7emsh8c21c2c1efd7f0bp1d2f00jsnca71904e27d4",
//       "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchProductDetailsOptions = async (productId) => {
//   const options = {
//     method: "GET",
//     url: "https://real-time-product-search.p.rapidapi.com/product-details",
//     params: {
//       product_id: productId,
//       country: "us",
//       language: "en",
//     },
//     headers: {
//       "X-RapidAPI-Key": "fc179a2c7emsh8c21c2c1efd7f0bp1d2f00jsnca71904e27d4",
//       "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
