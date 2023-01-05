import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Pages.Dashboard />} />
        <Route path="/" element={<Pages.Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
