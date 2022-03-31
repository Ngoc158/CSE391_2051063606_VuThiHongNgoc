import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainRoute = lazy(() => import("./mainRoute"));
const Home = lazy(() => import("../pages/Home/index"));
const MenuBento = lazy(() => import("../pages/MenuBento"));

const RootWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Make new path here */}
        <Route path="/" element={<MainRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<MenuBento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootWrapper;
