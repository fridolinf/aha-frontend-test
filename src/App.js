import "./App.css";
import Home from "./pages/Home";
import TagsPage from "./pages/TagsPage";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tags" element={<TagsPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
