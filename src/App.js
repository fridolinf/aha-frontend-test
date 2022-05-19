import "./App.css";
import Home from "./pages/Home";
import TagsPage from "./pages/TagsPage";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import React, { useEffect, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";

function Disclaimer() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#1b1b1b",
    border: "5px solid #fff",
    boxShadow: 24,
    p: 4,
    color: "#fff",
  };
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }, []);

  return (
    <div>
      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            color="#f42121"
            textAlign="center"
            variant="h6"
            component="h2"
          >
            DISCLAIMER.
          </Typography>
          <Typography variant="p" sx={{ mt: 2 }}>
            It is possible that the content image will fail to load, due to a
            network error or problem in API. Please check in dev tools or
            network on the console tab.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

function App() {
  return (
    <>
      <Disclaimer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tags" element={<TagsPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
