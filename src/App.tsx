import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, Provider } from "react-redux";
import * as Pages from "./pages";
import * as Components from "./components";
import { store, IRootState } from "./store";

function App() {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  return (
    <BrowserRouter>
      <div>"login: admin, password: admin"</div>
      <hr />
      <Components.Header />
      <Routes>
        <Route path="/" element={<Pages.Main />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Pages.Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
