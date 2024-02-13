import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { fetchSearchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchProducts = ({ defaultSearchResult, setProducts }) => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      const res = await fetchSearchData(search);
      const searchResult = res.data;
      setSearch("");
      setProducts(searchResult);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "40px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Products that <br />
        Are Trending
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700px", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Whatever You Want!"
          type="text"
        ></TextField>
        <Button
          className="search-btn"
          sx={{
            bgcolor: "Green",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          setProducts={setProducts}
          data={defaultSearchResult}
          handleSearch={handleSearch}
          setSearch={setSearch}
          defaultSearchResult
        />
      </Box>
    </Stack>
  );
};

export default SearchProducts;
