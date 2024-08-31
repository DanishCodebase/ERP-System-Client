import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../sales/SalesLanding/NavBarSales";
import Interviews from "../../sales/SalesLanding/Interviews";
import PositionsTable from "../../sales/SalesLanding/PositionsTable";
import NewPosition from "./NewPosition";

const OperationLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <NewPosition />
        </div>
      </main>
    </div>
  );
};

export default OperationLanding;
