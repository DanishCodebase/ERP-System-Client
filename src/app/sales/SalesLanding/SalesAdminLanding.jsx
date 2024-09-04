// src/app/sales/SalesLanding/SalesAdminLanding.jsx
import React from "react";
import Navbar from "./NavBarSales";
import { Routes, Route } from "react-router-dom";
import Interviews from "./Interviews";
import PositionsTable from "./PositionsTable";

const SalesAdminLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        menuItems={[
          { to: "/dashboard", label: "Dashboard" },
          { to: "/all-positions", label: "All Positions" },
          { to: "/clients", label: "Clients" },
          { to: "/operations", label: "Operations" },
        ]}
      />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Interviews />
                  <PositionsTable />
                </>
              }
            />
            <Route
              path="dashboard"
              element={
                <>
                  <Interviews />
                  <PositionsTable />
                </>
              }
            />
            <Route path="all-positions" element={<PositionsTable />} />
            <Route path="clients" element={<div>Client Component</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default SalesAdminLanding;
