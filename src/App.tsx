import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/dashboard" element={<Pages.Dashboard />} />
          <Route path="/" element={<Pages.Main />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
