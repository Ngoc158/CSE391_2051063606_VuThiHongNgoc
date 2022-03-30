import React from "react";
import { Outlet } from "react-router-dom";

import PageHeader from "../components/PageHeader/index";
import PageFooter from "../components/PageFooter/index";

const MainRoute = () => {
  return (
    <div className="page-wrapper">
      <div className="main-wrapper">
        {/* Header */}
        <PageHeader />

        {/* Pages path */}
        <div className="page-content">
          <Outlet />
        </div>

        {/* Footer */}
        <PageFooter />
      </div>
    </div>
  );
};

export default MainRoute;
