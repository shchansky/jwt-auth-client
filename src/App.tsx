import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import * as Components from "./components";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Components.Header />
        <Routes>
          <Route path="/dashboard" element={<Pages.Dashboard />} />
          <Route path="/" element={<Pages.Main />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
