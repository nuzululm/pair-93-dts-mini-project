import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Who from "./pages/Who";
import RouteProtected from "./components/RouteProtected";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Home />} />
        <Route path="/series" element={<Home />} />
        <Route path="/popular" element={<Home />} />
        <Route path="/mylist" element={<Home />} />

        {/* protect route  */}
        <Route
          path="/movie/:movieID"
          element={
            <RouteProtected>
              <Detail />
            </RouteProtected>
          }
        />

        <Route
          path="/login"
          element={
            <RouteProtected loginOnly={false}>
              <Login />
            </RouteProtected>
          }
        />
        <Route
          path="/register"
          element={
            <RouteProtected loginOnly={false}>
              <Register />
            </RouteProtected>
          }
        />
        <Route path="/who" element={<Who />} />
      </Routes>
    </>
  );
}

export default App;
