import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { x1: "1488px" } }} m="auto">
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
    </Box>
  );
};

export default App;
