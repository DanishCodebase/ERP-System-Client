import React from "react";
import Navbar from "../../sales/SalesLanding/NavBarSales";
import ActivePosition from "./ActivePosition";
import { Route, Routes } from "react-router-dom";
import CandidateProfiles from "./CandidateProfiles";

const OperationExecutive = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        menuItems={[
          { to: "./dashboard", label: "Dashboard" },
          { to: "./active-position", label: "Active Position" },
          { to: "./candidate-profiles", label: "Candidate's Profiles" },
        ]}
      />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Routes>
            <Route path="/" element={<ActivePosition />} />
            <Route path="/dashboard" element={<ActivePosition />} />
            <Route path="/candidate-profiles" element={<CandidateProfiles />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default OperationExecutive;
