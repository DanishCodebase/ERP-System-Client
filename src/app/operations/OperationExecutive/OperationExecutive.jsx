import React from "react";
import Navbar from "../../sales/SalesLanding/NavBarSales";
import ActivePosition from "./ActivePosition";

const OperationExecutive = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        menuItems={[
          { to: "/operaitonex/dashboard", label: "Dashboard" },
          { to: "/operaitonex/active-position", label: "Active Position" },
          { to: "/operaitonex/profiles", label: "Candidate's Profiles" },
        ]}
      />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <ActivePosition />
        </div>
      </main>
    </div>
  );
};

export default OperationExecutive;
